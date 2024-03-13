# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).


## Unreleased
---

### New

### Changes

### Fixes

### Breaks


## 1.0.4 (2024-03-13)
---

### New
Library documentation in the README file.

### Changes
New version of genericsuite 0.1.112.
Enhaced logo version.

### Fixes
Fix error "BREAKING CHANGE: The request 'react-syntax-highlighter/dist/cjs/styles/hljs' failed to resolve only because it was resolved as fully specified.


## 1.0.3 (2024-03-11)
---

### Changes
New version of genericsuite 0.1.10.

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
New GenericSuite AI cirle logo "gs_ai_logo_circle.svg"
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
