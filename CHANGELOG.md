# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).


## [Unreleased] - YYYY-MM-DD

### Added

### Changed

### Fixed

### Security

### Removed


## [1.3.0] - 2026-07-15

### Added
- AGENTS.md, GEMINI.md, and CLAUDE.md files to provide context and instructions to AI Coding Assistants [GS-303].
- Add SAST testing [GS-315].
- Add frontend scripts library [GS-107].

### Changed
- License changed to MIT [FA-244].
- Rename AWS_S3_BUCKET_NAME to AWS_S3_BUCKET_NAME_FE in the .env file [GS-328].
- ChatBot conversation code blocks enhancements: replace copy text button by an icon, and enhance design [GS-214].
- Add "tailwind-build" script to deploy_* and run_* Makefile commands [GS-214].
- `webpack.config.js` and `config-overrides.js`: commented out the Node.js core module `resolve.fallback` polyfills (`os`, `url`, `crypto`, `stream`, `assert`, `vm`, `tty`, `constants`, `zlib`, `https`, `http`, `util`) since nothing in the codebase needs them and Vite already runs fine without them; added `npm install --save-dev ...` notes above each so they can be re-enabled if a consumer's own dependency graph needs them [GS-338].

### Fixed
- "Could not resolve dependency: formik@2.4.5" error in `ExampleApp`, `FastApiTemplate` and all apps that uses `genericsuite-fe-ai` as a dependency [GS-254].
- "installHook.js:1 TypeError: JY.default.includes is not a function" error when certain ChatBot conversations are clicked and the page becomes empty [GS-214].
- `tsconfig.json` was missing an `exclude` for `*.test.tsx`, so every test file got its own `.d.ts` stub emitted into `dist/esm` and `dist/cjs` during the Rollup build. These 14 stray files were already committed to the repo and shipping in `dist/` with every npm publish [GS-338].
- Removed a bogus `"with"` entry from the `config-overrides.js` `resolve.fallback` config — `with` is not a Node.js core module, so the fallback never did anything [GS-338].
- The `webpack.config.js` fallback referenced `require.resolve("assert")` for a package that was never declared anywhere in `package.json`; documented it in the install note instead of leaving a silently-broken reference [GS-338].
- `rollup.config.mjs`: removed `formik` from the `external` array — it isn't a declared peer dependency and isn't imported anywhere in `src/` (leftover from copying `genericsuite-fe`'s Rollup config) [GS-338].
- "config-overrides.js" updated to fix errors running the app with RUN_BUNDLER="react-scripts" [GS-338], and refactor it to use fileURLToPath for path resolution and clean up unused debug logs [GS-327].
- "process" dependency installation on "webpack.config.js" file documentation to to fix errors running the app [GS-338].

### Security
- json5, postcss, and prismjs security vulnerabilities fixed by upgrading their dependent packages [GS-214].
- Upgrade dependencies to latest version: crypto-browserify@^3.12.1, downshift@^9.4.0, react-icons@^5.7.0, react-markdown@^10.1.0, react-syntax-highlighter@^16.1.1 [GS-219].
- Upgrade axios@^1.19.0 to fix the security vulnerabilities [GS-219]:
  * Server-side Request Forgery (SSRF) [High Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-17111062] in axios@1.15.1
  * Prototype Pollution [High Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-17111079] in axios@1.15.1
  * Insertion of Sensitive Information Into Sent Data [High Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-17172681] in axios@1.15.1
  * Improperly Controlled Modification of Dynamically-Determined Object Attributes [High Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-16299921] in axios@1.15.1
  * Prototype Pollution [High Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-17111060] in axios@1.15.1
  * Prototype Pollution [Critical Severity][https://security.snyk.io/vuln/SNYK-JS-AXIOS-16417750] in axios@1.15.1
  * Improper Removal of Sensitive Information Before Storage or Transfer [High Severity][https://security.snyk.io/vuln/SNYK-JS-FOLLOWREDIRECTS-16032162] in follow-redirects@1.15.11
  * Allocation of Resources Without Limits or Throttling in Axios
  * form-data: CRLF injection in form-data via unescaped multipart field names and filenames
  * Axios: Incomplete Fix for CVE-2025-62718 — NO_PROXY Protection Bypassed via RFC 1122 Loopback Subnet (127.0.0.0/8) in Axios 1.15.0
  * Axios: Header Injection via Prototype Pollution
  * Axios: unbounded recursion in toFormData causes DoS via deeply nested request data
  * follow-redirects leaks Custom Authentication Headers to Cross-Domain Redirect Targets
- Upgrade yup@^1.7.1 to fix the security vulnerabilities [GS-219]:
  * Arbitrary Code Injection [High Severity][https://security.snyk.io/vuln/SNYK-JS-LODASH-15869625] in lodash@4.17.23
    introduced by yup@0.32.11 > lodash@4.17.23
  * Arbitrary Code Injection [High Severity][https://security.snyk.io/vuln/SNYK-JS-LODASHES-15869627] in lodash-es@4.17.23
    introduced by yup@0.32.11 > lodash-es@4.17.23
  * lodash vulnerable to Prototype Pollution via array path bypass in `_.unset` and `_.omit`
- Upgrade react-router-dom@^7.18.2 to fix the security vulnerability [GS-219]:
  * React Router: RSC Mode CSRF Bypass Allows Action Execution Before 400 Response. This is a follow up to CVE-2026-22030 to address related CSRF flows in unstable RSC code paths.
  * React Router's vendored turbo-stream v2 allows arbitrary constructor invocation via TYPE_ERROR deserialization leading to Unauth RCE
  * React Router vulnerable to XSS in unstable RSC redirect handling via javascript: redirect targets
  * React Router vulnerable to DoS via unbounded path expansion in __manifest endpoin
  * React Router vulnerable to Denial of Service via reflected user input in single-fetch #105
- Upgrade jest to "^30.4.2", jest-environment-jsdom to "^30.4.1", and "babel-jest" to "^30.4.1" to fix the security vulnerabilities [GS-219].
  * @babel/plugin-transform-modules-systemjs generates arbitrary code when compiling malicious input
  * ws: Memory exhaustion DoS from tiny fragments and data chunks 
  * brace-expansion: DoS via exponential-time expansion of consecutive non-expanding {} groups
  * js-yaml: YAML merge-key chains can force quadratic CPU consumption
  * @babel/core: Arbitrary File Read via sourceMappingURL Comment
- Upgrade rollup-plugin-typescript2 to "^0.37.0" and typescript to "^5.3.3" to fix the security vulnerabilities [GS-219].
  * Picomatch: Method Injection in POSIX Character Classes causes incorrect Glob Matching
- Other security vulnerabilities fixed by upgrading their dependent packages [GS-219]:
  * SVGO removeScripts plugin leaves some executable scripts intact
  * serialize-javascript [removed] Serialize JavaScript is Vulnerable to RCE via RegExp.flags and Date.prototype.toISOString() [CVE-2020-7660](https://github.com/advisories/GHSA-hxcc-f52p-wc94)
  * serialize-javascript [removed] Serialize JavaScript has CPU Exhaustion Denial of Service via crafted array-like objects
  * PostCSS: Arbitrary file read and information disclosure via attacker-controlled sourceMappingURL in CSS comments
  * fast-uri [removed] fast-uri vulnerable to path traversal via percent-encoded dot segments
  * fast-uri [removed] fast-uri vulnerable to host confusion via percent-encoded authority delimiters
  * fast-uri [removed] fast-uri vulnerable to host confusion via failed IDN canonicalization 
  * path-to-regexp [removed] path-to-regexp vulnerable to Regular Expression Denial of Service via multiple route parameters [CVE-2024-45296](https://github.com/advisories/GHSA-9wv6-86v2-598j)
  * ip-address [removed] ip-address: Address4 decodes leading-zero octets as decimal while resolvers decode them as octal, allowing SSRF and trust-boundary bypass
  * express-rate-limit [removed] express-rate-limit: IPv4-mapped IPv6 addresses bypass per-client rate limiting on servers with dual-stack network 
  * qs [removed] qs has a remotely triggerable DoS: qs.stringify crashes with TypeError on null/undefined entries in comma-format arrays when encodeValuesOnly is set
  * body-parser [removed] body-parser vulnerable to denial of service when invalid limit value silently disables size enforcement
  * elliptic [removed] Elliptic Uses a Cryptographic Primitive with a Risky Implementation
- "react" and "react-dom" have now peer dependencies with "^18.2.0" that does not affect this codebase because it only uses BrowserRouter/Routes/Route/Link/Navigate, no RSC APIs. By the way React/ReactDOM will be upgraded to 19 on next release to fix the mentioned react-router-dom security vulnerability [GS-219].
- Bump Node.js version in .nvmrc to 26 [GS-339].

### Removed
- The `scripts/` directory were moved to the [frontend scripts library](https://github.com/tomkat-cr/genericsuite-fe-scripts) [GS-107].
- Unused `peerDependencies`: `react-icons`, `web-vitals`, `fs`, `json-loader`, `with`, `constants-browserify`, `crypto-browserify`, `os-browserify`, `stream-browserify`, `tty-browserify`, `url`, `vm-browserify`, `browserify-zlib`, `https-browserify`, `net`, `stream-http`, `util`, `buffer`, `downshift`, `history`, `rxjs`, `react-markdown`, `yup`. None are imported anywhere in `src/`; the CRUD-editor-oriented ones (`buffer`, `downshift`, `history`, `rxjs`, `react-markdown`, `yup`) are already required transitively through the `genericsuite` peer dependency for anyone who needs them, and the Node.js core module shims were only ever used by the (optional) webpack/`react-app-rewired` dev-server configs [GS-338].
- Unused `devDependencies`: `@babel/cli`, `@babel/preset-stage-0`, `@rollup/plugin-typescript`, `file-loader`, `path`, `url-loader` (same reasoning as `genericsuite-fe`), and `whatwg-fetch` (no test needs it here). `@testing-library/user-event` was kept — unlike `genericsuite-fe`, it's genuinely used in `ChatCodeBlock.test.tsx` [GS-338].
- Unnecessary dependencies  (css-loader, postcss-loader, style-loader, and , gh-pages). The user can import them if webpack or github pages are going to be used in their app [GS-338].
- 'id="copyButton"' attribute from the <ChatCopyButton /> component [GS-327].


## [1.2.0] - 2026-02-18

### Added
- Add API_VERSION envvar to set the API version, default to "v1" [GS-245].
- Add UPDATE_SNAPSHOTS envvar to "make publish" to run "npm test -- -u" instead of "npm run test"
- Add VERBOSE_RUN_CONFIG envvar to enable verbose logging in run_config.sh.
- Specific GS FE AI version of "run_publish.sh" command to publish the package to NPM.

### Changed
- Rename the frontend envvars to avoid conflicts with the same envvar used in the backend and be able to merge the ".env" files in a monorepo: GIT_SUBMODULE_LOCAL_PATH to GIT_SUBMODULE_LOCAL_PATH_FRONTEND, and RUN_METHOD to RUN_BUNDLER [GS-243].
- Refactor environment variable handling for monorepo compatibility:
  - REACT_APP_APP_NAME envvar can be removed and replaced by APP_NAME in monorepos [GS-243].
  - REACT_APP_DEBUG envvar can be removed and replaced by APP_DEBUG in monorepos [GS-243].
  - If REACT_APP_API_URL is not set, APP_API_URL can be used instead [GS-243].
  - If REACT_APP_URI_PREFIX is not set, URI_PREFIX can be used instead [GS-243].
  - If REACT_APP_X_TOKEN is not set, X_TOKEN can be used instead [GS-243].
  - If REACT_APP_USE_AXIOS is not set, USE_AXIOS can be used instead [GS-243].
- The error message in the AI Assistant chat is now floating [GS-246].
- Rename "idUtilities.getUuidV4" to "uuidUtilities.getUuidV4" [GS-266].

### Fixed
- Fix "npm warn deprecated text-encoding@0.7.0: no longer maintained" by removing "text-encoding" dependency and rollup external configuration [GS-219].
- Fix "make publish" build error by reverting all run_lib changes in package.json and "public/static" removal.
- Update chatbot popup routing to use hash-based URLs.
- Adjust build output directories [GS-262].

### Security
- Implement URL sanitization in ConversationBlock and input sanitization in ChatBotButton to prevent XSS vulnerabilities, along with corresponding tests [GS-262].
- Upgrade jest and babel to latest versions to fix the "npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful." warning [GS-219] [GS-267].
- 37 security vulnerabilities (including high and critical ones) found in the project's dependencies were addressed, adding an "overrides" section to package.json to force secure versions of transitive dependencies (elliptic, json5, minimatch, postcss, loader-utils) without breaking your high-level setup [GS-219] [GS-267].

### Removed
- Remove @tailwindcss/vite


## [1.1.0] - 2025-11-17

### Added
- Add local run protocol options (RUN_PROTOCOL) in .env.example.

### Changed
- Update CHANGELOG format to be more semantic.
- Remove logging in AudioPlayer component for clarity.
- Modify Makefile to move development dependencies before pre-publishing [GS-230].
- Optimize ChatCodeBlock component by import the list of supported languages directly from react-syntax-highlighter instead of defining a long, hardcoded list of languages in getPrismLanguajes() [GS-230].

### Fixed
- Fix the AI Assistant chat shows code blocks wrong with no word-wrapping or horizontal scrolling [GS-225].
- Remove Vite, Webpack and React-App-Rewired dependencies before publishing to NPM.
- Replace class-properties plugin with transform-class-properties to fix the "npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead." warning [GS-219].
- Fix the "[!] Only inline sourcemaps are supported when bundling to stdout." error when running "make publish" (specifically in the "rollup -c" command) because of `react-syntax-highlighter` v16+ and its dependencies now use ES modules exclusively, and Jest needs explicit configuration to transform these modules from `node_modules` (which are normally ignored by default) [FA-83].

### Security
- Update "axios" to ^1.13.0 to fix the following security vulnerability [GS-219]:
  - "form-data" CWE-343, CVE-2025-7783, CVSS 9.4.
  - "Axios is vulnerable to DoS attack through lack of data size check"
  - "form-data uses unsafe random function in form-data for choosing boundary"
- Fix "PostCSS line return parsing error" by updating "postcss" to "^8.5.6" [GS-219].
- Basic rate limiting to mitigate DoS via expensive FS operations in "server.js" [GS-219].
- Update "react-syntax-highlighter" to "^16.1.0" to fix the security vulnerability [GS-219]:
  - "PrismJS DOM Clobbering vulnerability"
- Bump babel-loader to ^10.0.0 to fix "@eslint/plugin-kit is vulnerable to Regular Expression Denial of Service attacks through ConfigCommentParser" [GS-219].
- The following security vulnerabilities were fixed by running "npm update" [GS-219]:
  - "Prototype Pollution in JSON5 via Parse Method"
  - "pbkdf2 returns predictable uninitialized/zero-filled memory for non-normalized or unimplemented algos"
  - "pbkdf2 silently disregards Uint8Array input, returning static keys"
  - "Prototype pollution in webpack loader-utils"
  - "sha.js is missing type checks leading to hash rewind and passing on crafted data"


## [1.0.23] - 2025-07-08

### Added
- Add landscape logo to the App header (appLogoHeader) [GS-63].

### Changed
- GenericSuite FE core upgraded to v1.0.25.
- convertId() function moved from db.service.jsx to id.utilities.jsx in GenericSuite FE [GS-185].
  - Before: const convertId = gs.dbService.convertId; ... or editor.db.convertId(...)
  - Now: const convertId = gs.idUtilities.convertId;
- Implement axios in all API calls to handle Flask backend files retrieval with all required headers [GS-15].
- Add Vite as alternative to webpack [GS-195].
- Tailwind CSS updated from "^v3.4.9" to "^v4.1.5" [GS-112].
- Add setupTests.js to fix jest test with "react-router-dom" to v7 [GS-199].
- Default node version upgraded to 20 in ".nvmrc" [GS-199].
- Add "@types/node" to resolve paths without error using "@/" prefix [GS-112] [PC-2].

### Fixed
- Fix the net:ERR_CERT_AUTHORITY_INVALID error in GenericSuite FE/BE using the https protocol [GS-198].
- Fix the React Router v7 Future Flag Warning by upgrading "react-router-dom" to v7 [GS-199].
- Fix "Warning: Each child in a list should have a unique "key" prop. Check the render method of `ChatCodeBlock`" warning.
- Update "webpack.config.js" to fix the error "Error: Can't resolve 'process/browser'" and remove NODE_TLS_REJECT_UNAUTHORIZED envvar [GS-199] [GS-198] [GS-195].


## [1.0.22] - 2025-02-19

### Changed
- GenericSuite FE core upgraded to v1.0.24.


## [1.0.21] - 2024-10-25

### Changed
- GenericSuite FE core upgraded to v1.0.23.

### Fixed
- Fix Markdown formatting in AI Assistant conversation [GS-145].
- Fix copy button in non-secure http connection [GS-144].
- Fix conversation list reload when any error occurs.
- Fix show vertical scroll bar in the chatbot input area when the content is too long.
- Fix AI Assistant in mobile devices.


## [1.0.20] - 2024-10-07

### Added
- New Genericsuite Core 1.0.22.
- New "GsIcons" library replaces FontAwesome [GS-115].

### Changed
- Update GS FE AI with GS FE Core Tailwind conversion and new contexts [GS-129].
- <HashRouter> was replaced by <RouterProvider> and createBrowserRouter() [GS-112].
- Chatbot camera, voice and clip icons changed to "m" size [GS-129].
- Chatbot design enhanced and responsive behavior fixed [GS-129].
- Delete button in the Chatbot conversation list shows only when the mouse pointer is over the conversation [GS-129].

### Fixed
- Fix missing classes in the new output.css of Tailwind v3.4.9 [GS-63].
- Fix the %PUBLIC_URL% issue in public/index.html file running the app with webpack [GS-116].
- Fix when Chatbot send an error and Close button is clicked, no further info is displayed in the message area [GS-129].
- Fix click in Chatbot conversation list item only works if the text is clicked, not the padding area [GS-129].
- Fix Chatbot <UserInput> location is wrong with the new GS FE Core and pure Tailwind, also should work when the <NoDesignComponent> template is used [GS-129].
- Fix all test to be compatible with new GS FE Core contexts and constants [GS-112] [GS-129].
- Remove all links references to "/#" [GS-112].
- Restrict the source code exported to dist in "make publish".
- Formik version fixed to 2.4.5 in package.json to avoid GCE_RFC warning when the +New button is clicked [GS-25] [GS-112].

### Removed
- Bootstrap CSS is not longer used [GS-63].
- FontAwesome is not longer used [GS-115].
- SVG images removed and included in the "GsIcons" library [GS-115].


## [1.0.19] - 2024-07-27

### Added
- Add: ".nvmrc" file to set the repo default node version.

### Changed
- Replace FynBot with AiAssitant, AI Asistant or Chatbot.
- Uninstall "genericsuite-fe" from devDependencies to separate both libraries and use the one installed in the parent project [GS-74].
- Specific instructions in Makefile "publish" and "pre-publish" to break "genericsuite-fe" scripts dependency [GS-74].

### Fixed
- Fix: Fix audio processing issues in FastAPI Apps [GS-95].
- Fix: "Cannot read properties of undefined (reading 'startsWith')" reading audios from FastAPI [GS-95].
- Fix: avoid broken image and add a "missing API headers" message when the backend API does not send http headers to the frontend [GS-95].
- Fix: "ReferenceError: fetch is not defined" error in npm test.


## [1.0.18] - 2024-06-06

### Added
- Add REACT_APP_USE_AXIOS env. var. to eventually suppress use of axios to send files. Axios is needed for FastAPI based API backend. Defaults to "1" [GS-95].

### Fixed
- Fix audio processing issues in FastAPI Apps [GS-95].
- Revert the box size and location on <VoiceMessageRecorder> change [GS-4].


## [1.0.17] - 2024-05-17

### Fixed
- Fix the "Uncaught ReferenceError: global is not defined" error removing "global.TextEncoder" from <FileUploader>.
- Fix the "TextEncoder is not a constructor" error moving "axios", "browserify-zlib", "https-browserify", "net", "stream-http", "text-encoding", "util" to the peerDependencies.


## [1.0.16] - 2024-05-17

### Fixed
- Try to fix the "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" error adding GenericSuite FE to prod dependencies.


## [1.0.15] - 2024-05-17

### Fixed
- Try to fix the "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" error adding the TextEncodingPolyfill to index.cjs.


## [1.0.14] - 2024-05-17

### Fixed
- Try to fix the Fix "Uncaught TypeError: util__WEBPACK_IMPORTED_MODULE_6__.TextEncoder is not a constructor" using axios by installing by import "text-encoding" in <FileUploader>.


## [1.0.13] - 2024-05-04

### Added
- Add "axios" to send files to the FastAPk bacjend API [GS-68].

### Changed
- Break the AI libs dependency from its Core [GS-74].
- Redirect README instructions to the GenericSuite Documentation [GS-73].
- Add "fileTypeFilter" parameter to <FileUploader/> to upload any file type.

### Fixed
- Fix: <VoiceMessageRecorder /> to restore the other buttons when there's any error.


## [1.0.12] - 2024-04-20

### Changed
- New version of genericsuite-fe 1.0.19 with FastAPI enhanced support [FA-246].
- ".env.example" GIT_SUBMODULE_URL and AWS_S3_BUCKET_NAME_* variables with more descriptive values.
- README with main image from the official documentation site, and .png version removed [FA-246].
- Homepage pointed to "https://genericsuite.carlosjramirez.com/Frontend-Development/GenericSuite-AI/" [FA-257].


## [1.0.11] - 2024-04-06

### Changed
- New version of genericsuite-fe 1.0.18.


## [1.0.10] - 2024-04-01

### Added
- Add `make deploy_demo` and `make config_demo` to manage the "demo" stage.
- Add "demo" stage to REACT_APP_API_URL, and AWS_S3_BUCKET_NAME.
- Add APP_FE_URL_DEV, APP_FE_URL_QA, APP_FE_URL_STAGING, APP_FE_URL_PROD, APP_FE_URL_DEMO variables to .env file, to be used by "aws_deploy_to_s3.sh" and "change_env_be_endpoint.sh" as the frontend domain.
- Add the FRONTEND_LOCAL_PORT and BACKEND_LOCAL_PORT variables to .env file, to define the local frontend and backend port numbers.

### Changed
- New version of genericsuite-fe 1.0.17.
- The REACT_APP_API_URL_DEV, REACT_APP_API_URL_QA, REACT_APP_API_URL_STAGING, REACT_APP_API_URL_PROD, and REACT_APP_API_URL_DEMO variable names in the .env file were renamed to APP_API_URL_DEV, APP_API_URL_QA, APP_API_URL_STAGING, APP_API_URL_PROD, and APP_API_URL_DEMO.
- The GITHUB_USERNAME and GITHUB_REPONAME variables are not longer required because "aws_deploy_to_s3.sh" just saves the existing value of "homepage" in package.json. Those 2 variables were removed from the .env file.
- "aws_deploy_to_s3.sh" take into account the APP_FE_URL domain in the CloudFront distribution creation.
- "make publish" report the package name and version in the publishing confirmation.
- "run_app_frontend.sh" assign APP_API_URL_DEV and REACT_APP_API_URL in the "dev" stage for both http and https modes. Previously it was only made for http.
- "config-overrides.js", "webpack.config.js" and "server.js" use the "FRONTEND_LOCAL_PORT" env. var.
- Node.js install links changed to include the NVM alternative download in the README.
- License changed to ISC [FA-244].

### Fixed
- Fix "add_github_submodules.sh" to do "git submodule init", "git submodule sync" and "git pull --tags origin main" instead of "git checkout origin/main" to effectively pull the JSON configs from the git repository when the directory specified in "GIT_SUBMODULE_LOCAL_PATH" already exists and "git submodule add" was already run.


## [1.0.9] - 2024-03-22

### Added
- Add About and HomePage components (not exported, only for "src/index.jsx" test).
- Add "react-test-renderer" and test for About and HomePage components.

### Changed
- New version of genericsuite-fe 1.0.16 with the **"dictToAdd" precedence over "originDict" in mergeDicts()** fix to allow the referring App to overwrite "componentMap" with specific <AboutBody/> and <HomePage/> on the <App/> component call.
- REACT_APP_GENERIC_SUITE_AI environment variable removed from webpack.config.js and .env.example.
- Debug turned off on <App/>, <UserInput/>, <ChatBotButton/> and <HomePage/>.
- "componentMap" added to "src/index.jsx" to show specific <AboutBody/> and <HomePage/>.
- Enhanced introduction and code examples text in the  "/README.md" file.
- "__snapshots__" included in ".gitignore" and ".npmignore".

### Fixed
- Fix the "ReferenceError: Response is not defined" message during the tests by adding the "whatwg-fetch" devDependency.


## [1.0.8] - 2024-03-19

### Added
- Add `make pre-publish` and `make publish` to publish library to NPMJS.
- Add `make test-run-build` and `make test-run-build-restore` and "server.js" to preview the QA/Staging/Prod live environments behavior along with the new genericsuite-fe `build_prod_test.sh` bash script.
- Add the `src/configs/README.md` documentation as a complete GenericSuite App creation and configuration guide for all versions.

### Changed
- New version of genericsuite-fe 1.0.14.
- Add the `src/lib/images` directory to the library distribution.
- Deployment and local run bash scripts changed to copy all images to the `build/static/media` directory.
- Local run bash script creates a symlink in the `dist` directory to the `build/static/media` directory.
- "gsAiLogoCircle" exported as image name, not object.

### Fixed
- Fix the images load error in QA/Staging/Prod live environments: "DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('/static/media/app_logo_square.cd60e8686a973f7c77e9d25313787676.svg') is not a valid name."
- Fix the "Import in body of module; reorder to top" in all AI components [FA-83], [FA-239].


## [1.0.7] - 2024-03-13

### Added
- Add ChatBotButton component.

### Fixed
- Fix the component exports for the "dist", isolating each component.


## [1.0.6] - 2024-03-13

### Fixed
- Fix error "Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object." in the referring project, replacing "import { App as GsApp } from 'genericsuite'" by "import * as gs from "genericsuite"" in src/components/App.jsx.


## [1.0.5] - 2024-03-13

### Fixed
- Fix error "Uncaught ReferenceError: require is not defined at ./node_modules/genericsuite-ai/dist/esm/index.js (chatbot.general.functions.jsx:) replacing all "require('genericsuite)" with "import * as gs from "genericsuite"".


## [1.0.4] - 2024-03-13

### Added
- Library documentation in the README file.

### Changed
- New version of genericsuite-fe 0.1.112.
- Enhaced logo version.

### Fixed
- Fix error "BREAKING CHANGE: The request 'react-syntax-highlighter/dist/cjs/styles/hljs' failed to resolve only because it was resolved as fully specified.


## [1.0.3] - 2024-03-11

### Changed
- New version of genericsuite-fe 0.1.10.

### Fixed
- "package-lock.json" rebuilt.


## [1.0.2] - 2024-03-11

### Added
- Add files and package.json configurations to make genericsuite-ai an npm module.
- Add ".env.example" and "CHANGELOG.md" to package.json included files.
- Add webpack.config.js to test the module locally.
- Add "lock", "build" and "publish" options to Makefile.
- Add ".env.example" to package.json included files.
- Add jest and <Chatbot /> test.
- New GenericSuite AI circle logo "gs_ai_logo_circle.svg".
- Add GenericSuite AI logo to index.tsx to customize Login.
- Add a <App /> component with "appLogo" and "componentMap" parameters when calling GenericSuite's <App />.

### Changed
- Change module structure: add "src/lib" directory, remove "_" prefix to "_components", and move it to "src/lib".
- All components and generic code exports included in the "src/lib/index.cjs" file.
- REACT_APP_GENERIC_SUITE_AI_PATH removed from env.example, webpack.config.js and generic.editor.rfc.ai.button.jsx, and replaced by REACT_APP_GENERIC_SUITE_AI.
- All dependencies moved to devDependencies and peerDependencies to effectively build the library in npmjs.
- Module in "tsconfig.json" changed to "ESNext".
- "src/lib/index.js" renamed to "src/lib/index.cjs".
- "babel.config.json" renamed to "babel.config.cjs".
- "rollup.config.js" renamed to "rollup.config.mjs".
- "console.error" replaced by "console_debug_log" in chatbot.db.operations.jsx to avoid test errors.

### Fixed
- Fix the error "webpack reactjs Uncaught ReferenceError: require is not defined".
- Fix the error "The request '../_constants/general_constants' failed to resolve only because it was resolved as fully specified".
- Fix the "RollupError: Could not resolve entry module "dist/esm/index.js"." error changing the following values in "package.json":
  - "main": "dist/cjs/index.js",
  - "module": "dist/esm/index.js",
  - "types": "dist/index.d.ts",


## [1.0.1] - 2024-03-06

### Fixed
- Fix .babel, rollup.config.js, tsconfig.json, package.json, and index.tsx to generate the npm module and include the "/dist" files.


## [1.0.0] - 2024-03-05

### Added
- Separate FE Generic Suite AI to publish on NPM [FA-221].
- Initial commit as an independent repository.


## [0.0.2] - 2024-02-18

### Added
- Add image generator using OpenAPI DALL-E 3 and show in the conversation component [FA-165].
- Implement GPT4 Vision and a FileUpload component [FA-144].
- Implement Audio processing using OpenAPI whisper and VoiceMessageRecorder component created [FA-145].
- Implement TTS-1 text-to-speech OpenAI Model and play the audio in the conversation by the AudioPlayer component [FA-210].
- FE-BE: ChatBOT chats stored in the DB [FA-119].


## [0.0.1] - 2023-07-21

### Added
- Start AI Chatbot development [FA-93].
