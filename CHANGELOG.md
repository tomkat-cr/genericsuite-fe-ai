# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).


## Unreleased
---

### New

### Changes

### Fixes

### Breaks


## 1.0.9 (2024-03-22)
---

### New
Add About and HomePage components (not exported, only for "src/index.jsx" test).
Add "react-test-renderer" and test for About and HomePage components.

### Changes
New version of genericsuite-fe 1.0.16 with the **"dictToAdd" precedence over "originDict" in mergeDicts()** fix to allow the referring App to overwrite "componentMap" with specific <AboutBody/> and <HomePage/> on the <App/> component call.
REACT_APP_GENERIC_SUITE_AI environment variable removed from webpack.config.js and .env.example.
Debug turned off on <App/>, <UserInput/>, <ChatBotButton/> and <HomePage/>.
"componentMap" added to "src/index.jsx" to show specific <AboutBody/> and <HomePage/>.
Enhanced introduction and code examples text in the  "/README.md" file.
"__snapshots__" included in ".gitignore" and ".npmignore".

### Fixes
Fix the "ReferenceError: Response is not defined" message during the tests by adding the "whatwg-fetch" devDependency.


## 1.0.8 (2024-03-19)
---

### New
Add `make pre-publish` and `make publish` to publish library to NPMJS.
Add `make test-run-build` and `make test-run-build-restore` and "server.js" to preview the QA/Staging/Prod live environments behavior along with the new genericsuite-fe `build_prod_test.sh` bash script.
Add the `src/configs/README.md` documentation as a complete GenericSuite App creation and configuration guide for all versions.

### Changes
New version of genericsuite-fe 1.0.14.
Add the `src/lib/images` directory to the library distribution.
Deployment and local run bash scripts changed to copy all images to the `build/static/media` directory.
Local run bash script creates a symlink in the `dist` directory to the `build/static/media` directory.
"gsAiLogoCircle" exported as image name, not object.

### Fixes
Fix the images load error in QA/Staging/Prod live environments: "DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('/static/media/app_logo_square.cd60e8686a973f7c77e9d25313787676.svg') is not a valid name."
Fix the "Import in body of module; reorder to top" in all AI components.
[FA-83], [FA-239]


## 1.0.7 (2024-03-13)
---

### New
Add ChatBotButton component.

### Fixes
Fix the component exports for the "dist", isolating each component.


## 1.0.6 (2024-03-13)
---

### Fixes
Fix error "Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object." in the referring project, replacing "import { App as GsApp } from 'genericsuite'" by "import * as gs from "genericsuite"" in src/components/App.jsx.


## 1.0.5 (2024-03-13)
---

### Fixes
Fix error "Uncaught ReferenceError: require is not defined at ./node_modules/genericsuite-ai/dist/esm/index.js (chatbot.general.functions.jsx:) replacing all "require('genericsuite)" with "import * as gs from "genericsuite"".


## 1.0.4 (2024-03-13)
---

### New
Library documentation in the README file.

### Changes
New version of genericsuite-fe 0.1.112.
Enhaced logo version.

### Fixes
Fix error "BREAKING CHANGE: The request 'react-syntax-highlighter/dist/cjs/styles/hljs' failed to resolve only because it was resolved as fully specified.


## 1.0.3 (2024-03-11)
---

### Changes
New version of genericsuite-fe 0.1.10.

### Fixes
"package-lock.json" rebuilt.


## 1.0.2 (2024-03-11)
---

### New
Add files and package.json configurations to make genericsuite-ai an npm module.
Add ".env.example" and "CHANGELOG.md" to package.json included files.
Add webpack.config.js to test the module locally.
Add "lock", "build" and "publish" options to Makefile.
Add ".env.example" to package.json included files.
Add jest and <Chatbot /> test.
New GenericSuite AI circle logo "gs_ai_logo_circle.svg"
Add GenericSuite AI logo to index.tsx to customize Login.
Add a <App /> component with "appLogo" and "componentMap" parameters when calling GenericSuite's <App />.

### Changes
Change module structure: add "src/lib" directory, remove "_" prefix to "_components", and move it to "src/lib".
All components and generic code exports included in the "src/lib/index.cjs" file.
REACT_APP_GENERIC_SUITE_AI_PATH removed from env.example, webpack.config.js and generic.editor.rfc.ai.button.jsx, and replaced by REACT_APP_GENERIC_SUITE_AI.
All dependencies moved to devDependencies and peerDependencies to effectively build the library in npmjs.
Module in "tsconfig.json" changed to "ESNext".
"src/lib/index.js" renamed to "src/lib/index.cjs".
"babel.config.json" renamed to "babel.config.cjs".
"rollup.config.js" renamed to "rollup.config.mjs".
"console.error" replaced by "console_debug_log" in chatbot.db.operations.jsx to avoid test errors.

### Fixes
Fix the error "webpack reactjs Uncaught ReferenceError: require is not defined".
Fix the error "The request '../_constants/general_constants' failed to resolve only because it was resolved as fully specified".
Fix the "RollupError: Could not resolve entry module "dist/esm/index.js"." error changing the following values in "package.json":
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/index.d.ts",


## 1.0.1 (2024-03-06)
---

### Fixes
Fix .babel, rollup.config.js, tsconfig.json, package.json, and index.tsx to generate the npm module and include the "/dist" files.


## 1.0.0 (2024-03-05)
---

### New
Separate FE Generic Suite AI to publish on NPM [FA-221].
Initial commit as an independent repository.


## 0.0.2 (2024-02-18)
---

### New
Add image generator using OpenAPI DALL-E 3 and show in the conversation component [FA-165].
Implement GPT4 Vision and a FileUpload component [FA-144].
Implement Audio processing using OpenAPI whisper and VoiceMessageRecorder component created [FA-145].
Implement TTS-1 text-to-speech OpenAI Model and play the audio in the conversation by the AudioPlayer component [FA-210].
FE-BE: ChatBOT chats stored in the DB [FA-119].


## 0.0.1 (2023-07-21)
---

### New
Start programming of the AI Chatbot [FA-93].
