# CHANGELOG

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep a Changelog](http://keepachangelog.com/).


## Unreleased
---

### New

### Changes

### Fixes

### Breaks


## 1.0.2 (2024-03-06)
---

### New
Add files and package.json configurations to make genericsuite-ai an npm module.
Add webpack.config.js to test the module locally.

### Fixes
Fix the error "webpack reactjs Uncaught ReferenceError: require is not defined".
Fix the error "The request '../_constants/general_constants' failed to resolve only because it was resolved as fully specified".


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
