# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

**genericsuite-ai** is a React component library (npm package) that provides AI ChatBot tools for ReactJS applications. It is the AI-focused frontend companion to the [genericsuite-be-ai](https://github.com/tomkat-cr/genericsuite-be-ai) backend, and extends [genericsuite-fe](https://github.com/tomkat-cr/genericsuite-fe) (the base GenericSuite library, referenced as `genericsuite` in imports).

The package is built with Rollup and publishes to npm as CJS + ESM dual-format. It is **not** a standalone app — it is consumed by host applications.

It is part of a larger ecosystem of GenericSuite projects, including backends (genericsuite-be and genericsuite-be-ai) and mobile packages (genericsuite-mobile). For more information about the GenericSuite ecosystem, see the [GenericSuite Basecamp](https://github.com/tomkat-cr/genericsuite-basecamp).

## Commands

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run a single test file
npx jest src/lib/components/ChatBot/ChatBot.test.tsx

# Update test snapshots
npm test -- -u

# Build the library (outputs to dist/)
npm run build

# Lint/type-check via TypeScript
npx tsc --noEmit

# Tailwind CSS (watch mode for development)
make tailwind

# Tailwind CSS (one-shot build)
make tailwind-build

# Pre-publish validation (build + test)
make pre-publish

# Publish to npm
make publish

# Run SAST testing
make sast-test

# Link AGENTS.md and CLAUDE.md files
make agents_md_link
```

## Architecture

### Library Structure

- **Entry point**: `src/lib/index.cjs` — exports all public components
- **Build output**: `dist/cjs/` (CommonJS), `dist/esm/` (ESM), `dist/index.d.ts` (types)
- **Build tool**: Rollup (`rollup.config.mjs`) with TypeScript, PostCSS, SVG, and Babel plugins
- **All peer dependencies** (React, genericsuite, react-router-dom, etc.) are externalized from the bundle

### Component Hierarchy

```
ChatBot                   ← main chat UI (manages state via useReducer chatReducer)
  ├─ ConversationList     ← sidebar with past conversations
  ├─ ConversationBlock    ← renders message history with markdown + code blocks
  │    ├─ ChatCodeBlock   ← syntax-highlighted code blocks
  │    ├─ AudioPlayer     ← plays audio responses
  │    └─ ScrollToBottomButton / GoToTheBottom
  ├─ UserInput            ← text input area with send/stop controls
  ├─ FileUploader         ← attach files to messages
  ├─ VoiceMessageRecorder ← record audio input
  ├─ CameraComponent      ← capture images
  ├─ NewConversationButton
  └─ ConversationsToggleButton
ChatBotButton             ← entry point for embedding chat in CRUD forms
  └─ ChatBot              ← call the main chat UI (in a pop-up window, reduced with no conversation list)
```

### State Management

`ChatBot.jsx` uses a `useReducer` with `chatReducer` for all chat state:
- `ADD_MESSAGE` / `SET_MESSAGES` — conversation history
- `API_PROCESSING_STATUS` — wait animation toggle
- `SET_INPUT_MESSAGE` / `SET_ERROR_MSG` — input and error state
- `SET_CONVERSATION_LIST_TOGGLE` — sidebar open/closed

Helper modules alongside `ChatBot.jsx`:
- `chatbot.general.functions.jsx` — dispatch wrappers
- `chatbot.db.operations.jsx` — API calls (`ApiCall`, `fetchConversations`, `getCurrentUserId`) using `genericsuite`'s `dbApiService`

### Dependency on `genericsuite`

All components import from `genericsuite` (the base library):
```js
import * as gs from "genericsuite";
```

Services accessed include: `gs.loggingService`, `gs.dbService`, `gs.errorAndReenter`, `gs.AppContext`, `gs.UserContext`, `gs.ui`, `gs.urlParams`, `gs.classNameConstants`, `gs.IconsLib`, `gs.blobFilesUtilities`, `gs.responseHandlersService`, `gs.genericEditorUtilities`, `gs.idUtilities`.

### Styling

- Tailwind CSS utility classes defined in `src/lib/constants/class_name_constants.jsx`
- Components import class name constants from that file rather than hardcoding CSS strings
- CSS class names are double-suffixed with a descriptive identifier (e.g., `chatbot-container-div-1-class`) for easy targetability from host apps
- Inline CSS imports are avoided in source; PostCSS is handled at build time

### Icons

`src/lib/helpers/iconsLibAiExtras.jsx` provides inline SVG icons (play, stop, camera, microphone, paperclip, etc.) as a switch-case function. These supplement icons from `genericsuite`'s `gs.IconsLib.GsIcons`.

### Security Patterns

- URL sanitization in `ConversationBlock.jsx`: blocks `javascript:` protocol, allows `http/https/data` URIs
- Input sanitization in `ChatBotButton.jsx`: strips `<>` characters before constructing chatbot query URLs
- `ChatBotButton` opens a popup window via `window.open` with `encodeURIComponent`-encoded parameters

### Testing

- Framework: Jest + jsdom + `@testing-library/react`
- Config: `jest.config.cjs` with `babel-jest` transform
- CSS modules mocked via `src/lib/test-helpers/styleMock.js`
- Test files co-located with components: `*.test.tsx` alongside each component
- Snapshots in `__snapshots__/` subdirectories
- `transformIgnorePatterns` in `jest.config.cjs` lists ESM-only packages that need transpilation (e.g., `genericsuite`, `react-markdown`, `unified`, etc.)

## Code style guidelines

### File naming
- Component folders and files: PascalCase (e.g., `ChatBot/`, `ConversationBlock.jsx`)
- Utility/helper files: camelCase or dot-separated descriptors (e.g., `chatbot.db.operations.jsx`, `chatbot.general.functions.jsx`, `iconsLibAiExtras.jsx`)
- Constants files: snake_case (e.g., `class_name_constants.jsx`)
- Test files: `.test.tsx` (TypeScript) co-located with their component

### Language and typing
- Component implementations: `.jsx` (JavaScript, no TypeScript interfaces)
- Test files: `.tsx` (TypeScript) with strict mode enabled
- Props are not explicitly typed in `.jsx` files — destructured inline at function parameters
- TypeScript config: `tsconfig.json` with `"strict": true` and `"jsx": "react"`

### Imports (ordered top to bottom)
1. React and React hooks
2. Third-party libraries
3. `genericsuite` — always imported as `import * as gs from "genericsuite"`
4. Local components
5. Constants and helper functions

### Component structure
- Functional components with React hooks only — no class components
- Named exports only — no default exports from components or helpers
- Props destructured in function signature

### Constants and class names
- All Tailwind/CSS class strings live in `src/lib/constants/class_name_constants.jsx` — never hardcoded in components
- Constant naming pattern: `CHATBOT_[COMPONENT]_[ELEMENT]_CLASS`
- Class name strings always include a descriptive CSS identifier suffix (e.g., `chatbot-container-div-1-class`) for host-app targetability

### Comments
- Minimal JSDoc; inline comments only where logic is non-obvious
- Debug logging controlled by a debug flag, not removed outright
- External documentation URLs referenced in comments where applicable

### ESLint / Babel
- ESLint config in `package.json` extending `react-app` and `react-app/jest` — no separate `.eslintrc`
- Babel via `.babelrc` with presets for React, TypeScript, and class properties; `css-modules-transform` plugin for tests

## Security considerations

### URL sanitization (`ConversationBlock.jsx`)
- `sanitizeUrl()` is applied to every `href`, `src`, and download URL before rendering
- Blocks `javascript:` protocol (returns `#`)
- Whitelists protocols: `http`, `https`, `mailto`, `tel`
- Allows `data:` URIs only for `image/png` and `image/jpeg` — all other data URIs are blocked
- XSS scenarios are covered by tests in `ConversationBlock.test.tsx`

### Input sanitization (`ChatBotButton.jsx`)
- `sanitizePromptInput()` strips `<` and `>` characters and trims whitespace before the value is used in URLs
- All URL parameters are further encoded with `encodeURIComponent`
- Covered by tests in `ChatBotButton.test.tsx`

### Markdown and code rendering
- No `dangerouslySetInnerHTML` used anywhere in the library
- Markdown rendered via `gs.ui.renderMarkdownContent()` (delegated to genericsuite)
- Code blocks rendered via `react-syntax-highlighter` (safe, no eval)

### File uploads (`FileUploader.jsx`)
- Client-side MIME type check: only `image/*` types accepted when a filter is active
- Server-side validation is required — client validation is a first layer only
- Auth headers injected via `gs.authHeader.authHeader()` — no credentials hardcoded

### Camera / microphone
- Permissions requested via the standard `navigator.mediaDevices.getUserMedia()` API; the browser enforces the permission prompt
- Errors from denied permissions are caught and surfaced to the user

### API calls (`chatbot.db.operations.jsx`)
- All parameters passed as structured objects through `dbApiService` — no string concatenation for URLs
- `AbortController` used to cancel in-flight requests and prevent duplicates
- Authentication delegated entirely to `gs.authHeader` (in the genericsuite library)

### No unsafe patterns
- No `eval()`, `new Function()`, or dynamic script execution anywhere in the codebase
- No credentials or API keys hardcoded; sensitive config comes from `REACT_APP_*` env vars at build time

### Dependency security
- `package.json` uses an `"overrides"` section to force patched versions of transitive dependencies with known vulnerabilities (e.g., `elliptic`, `json5`, `minimatch`, `postcss`, `loader-utils`)

## Important Notes

- The `AGENTS.md` file (if present) is a symlink to `CLAUDE.md` — edit only `CLAUDE.md`.
- Skills, commands, rules, and sub-agents are located in the `.claude/` directory.
