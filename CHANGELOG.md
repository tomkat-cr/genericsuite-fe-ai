# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).


## Unreleased
---

### New

### Changes

### Fixes

### Breaks


## 1.0.23 (2025-07-08)
---

### New
Add landscape logo to the App header (appLogoHeader) [GS-63].

### Changes
GenericSuite FE core upgraded to v1.0.25.
convertId() function moved from db.service.jsx to id.utilities.jsx in GenericSuite FE [GS-185].
  Before: const convertId = gs.dbService.convertId; ... or editor.db.convertId(...)
  Now: const convertId = gs.idUtilities.convertId;
Implement axios in all API calls to handle Flask backend files retrieval with all required headers [GS-15].
Add Vite as alternative to webpack [GS-195].
Tailwind CSS updated from "^v3.4.9" to "^v4.1.5" [GS-112].
Add setupTests.js to fix jest test with "react-router-dom" to v7 [GS-199].
Default node version upgraded to 20 in ".nvmrc" [GS-199].
Add "@types/node" to resolve paths without error using "@/" prefix [GS-112] [PC-2].

### Fixes
Fix the net:ERR_CERT_AUTHORITY_INVALID error in GenericSuite FE/BE using the https protocol [GS-198].
Fix the React Router v7 Future Flag Warning by upgrading "react-router-dom" to v7 [GS-199].
Fix "Warning: Each child in a list should have a unique "key" prop. Check the render method of `ChatCodeBlock`" warning.
Update "webpack.config.js" to fix the error "Error: Can't resolve 'process/browser'" and remove NODE_TLS_REJECT_UNAUTHORIZED envvar [GS-199] [GS-198] [GS-195].


## 1.0.22 (2025-02-19)
---

### Changes
GenericSuite FE core upgraded to v1.0.24.


## 1.0.21 (2024-10-25)
---

### Changes
GenericSuite FE core upgraded to v1.0.23.

### Fixes
Fix Markdown formatting in AI Assistant conversation [GS-145].
Fix copy button in non-secure http connection [GS-144].
Fix conversation list reload when any error occurs.
Fix show vertical scroll bar in the chatbot input area when the content is too long.
Fix AI Assistant in mobile devices.


## 1.0.20 (2024-10-07)
---

### New
New Genericsuite Core 1.0.22.
New "GsIcons" library replaces FontAwesome [GS-115].

### Changes
Update GS FE AI with GS FE Core Tailwind conversion and new contexts [GS-129].
<HashRouter> was replaced by <RouterProvider> and createBrowserRouter() [GS-112].
Chatbot camera, voice and clip icons changed to "m" size [GS-129].
Chatbot design enhanced and responsive behavior fixed [GS-129].
Delete button in the Chatbot conversation list shows only when the mouse pointer is over the conversation [GS-129].

### Fixes
Fix missing classes in the new output.css of Tailwind v3.4.9 [GS-63].
Fix the %PUBLIC_URL% issue in public/index.html file running the app with webpack [GS-116].
Fix when Chatbot send an error and Close button is clicked, no further info is displayed in the message area [GS-129].
Fix click in Chatbot conversation list item only works if the text is clicked, not the padding area [GS-129].
Fix Chatbot <UserInput> location is wrong with the new GS FE Core and pure Tailwind, also should work when the <NoDesignComponent> template is used [GS-129].
Fix all test to be compatible with new GS FE Core contexts and constants [GS-112] [GS-129].
Remove all links references to "/#" [GS-112].
Restrict the source code exported to dist in "make publish".
Formik version fixed to 2.4.5 in package.json to avoid GCE_RFC warning when the +New button is clicked [GS-25] [GS-112].

### Breaks
Bootstrap CSS is not longer used [GS-63].
FontAwesome is not longer used [GS-115].
SVG images removed and included in the "GsIcons" library [GS-115].


## 1.0.19 (2024-07-27)

### New
Add: ".nvmrc" file to set the repo default node version.

### Changes
Replace FynBot with AiAssitant, AI Asistant or Chatbot.
Uninstall "genericsuite-fe" from devDependencies to separate both libraries and use the one installed in the parent project [GS-74].
Specific instructions in Makefile "publish" and "pre-publish" to break "genericsuite-fe" scripts dependency [GS-74].

### Fixes
Fix: Fix audio processing issues in FastAPI Apps [GS-95].
Fix: "Cannot read properties of undefined (reading 'startsWith')" reading audios from FastAPI [GS-95].
Fix: avoid broken image and add a "missing API headers" message when the backend API does not send http headers to the frontend [GS-95].
Fix: "ReferenceError: fetch is not defined" error in npm test.


## 1.0.18 (2024-06-06)
---

### New
Add REACT_APP_USE_AXIOS env. var. to eventually suppress use of axios to send files. Axios is needed for FastAPI based API backend. Defaults to "1" [GS-95].

### Fixes
Fix audio processing issues in FastAPI Apps [GS-95].
Revert the box size and location on <VoiceMessageRecorder> change [GS-4].


## 1.0.17 (2024-05-17)
---

### Fixes
Fix the "Uncaught ReferenceError: global is not defined" error removing "global.TextEncoder" from <FileUploader>.
Fix the "TextEncoder is not a constructor" error moving "axios", "browserify-zlib", "https-browserify", "net", "stream-http", "text-encoding", "util" to the peerDependencies.


## 1.0.16 (2024-05-17)
---

### Fixes
Try to fix the "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" error adding GenericSuite FE to prod dependencies.


## 1.0.15 (2024-05-17)
---

### Fixes
Try to fix the "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" error adding the TextEncodingPolyfill to index.cjs.


## 1.0.14 (2024-05-17)
---

### Fixes
Try to fix the Fix "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" using axios by installing by import "text-encoding" in <FileUploader>.


## 1.0.13 (2024-05-04)
---

### New
Add "axios" to send files to the FastAPk bacjend API [GS-68].

### Changes
Break the AI libs dependency from its Core [GS-74].
Redirect README instructions to the GenericSuite Documentation [GS-73].
Add "fileTypeFilter" parameter to <FileUploader/> to upload any file type.

### Changes
Fix: <VoiceMessageRecorder /> to restore the other buttons when there's any error.


## 1.0.12 (2024-04-20)
---

### Changes
New version of genericsuite-fe 1.0.19 with FastAPI enhanced support [FA-246].
".env.example" GIT_SUBMODULE_URL and AWS_S3_BUCKET_NAME_* variables with more descriptive values.
README with main image from the official documentation site, and .png version removed [FA-246].
Homepage pointed to "https://genericsuite.carlosjramirez.com/Frontend-Development/GenericSuite-AI/" [FA-257].


## 1.0.11 (2024-04-06)
---

### Changes
New version of genericsuite-fe 1.0.18.


## 1.0.10 (2024-04-01)
---

### New
Add `make deploy_demo` and `make config_demo` to manage the "demo" stage.
Add "demo" stage to REACT_APP_API_URL, and AWS_S3_BUCKET_NAME.
Add APP_FE_URL_DEV, APP_FE_URL_QA, APP_FE_URL_STAGING, APP_FE_URL_PROD, APP_FE_URL_DEMO variables to .env file, to be used by "aws_deploy_to_s3.sh" and "change_env_be_endpoint.sh" as the frontend domain.
Add the FRONTEND_LOCAL_PORT and BACKEND_LOCAL_PORT variables to .env file, to define the local frontend and backend port numbers.

### Fixes
Fix "add_github_submodules.sh" to do "git submodule init", "git submodule sync" and "git pull --tags origin main" instead of "git checkout origin/main" to effectively pull the JSON configs from the git repository when the directory specified in "GIT_SUBMODULE_LOCAL_PATH" already exists and "git submodule add" was already run.

### Changes
New version of genericsuite-fe 1.0.17.
The REACT_APP_API_URL_DEV, REACT_APP_API_URL_QA, REACT_APP_API_URL_STAGING, REACT_APP_API_URL_PROD, and REACT_APP_API_URL_DEMO variable names in the .env file were renamed to APP_API_URL_DEV, APP_API_URL_QA, APP_API_URL_STAGING, APP_API_URL_PROD, and APP_API_URL_DEMO.
The GITHUB_USERNAME and GITHUB_REPONAME variables are not longer required because "aws_deploy_to_s3.sh" just saves the existing value of "homepage" in package.json. Those 2 variables were removed from the .env file.
"aws_deploy_to_s3.sh" take into account the APP_FE_URL domain in the CloudFront distribution creation.
"make publish" report the package name and version in the publishing confirmation.
"run_app_frontend.sh" assign APP_API_URL_DEV and REACT_APP_API_URL in the "dev" stage for both http and https modes. Previously it was only made for http.
"config-overrides.js", "webpack.config.js" and "server.js" use the "FRONTEND_LOCAL_PORT" env. var.
Node install links changed to include the NVM alternative download in the README.
License changed to ISC [FA-244].


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
