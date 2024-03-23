# GenericSuite AI for ReactJS (frontend version)

![GenericSuite AI Logo](https://github.com/tomkat-cr/genericsuite-fe-ai/blob/main/src/lib/images/gs_ai_logo_circle.png)

Welcome to GenericSuite AI, a comprehensive software solution designed to enhance your productivity and streamline your workflows. This repository contains the frontend part of GenericSuite AI, equipped with AI ChatBot tools, a customizable CRUD editor, login interface and a suite of tools to kickstart your development process.

## Features

- **AI ChatBot tools:** to implement Chatbot conversations base on NLP (Natural Language Processing), LLM (Large Language Models) and other AI technologies like ChatGPT.
- **Customizable CRUD editor:** core CRUD (Create-Read-Update-Delete) code that can be parametrized and extended by JSON configuration files. There's no need to rewrite code for each table editor.
- **Customizable menu:** menu and endpoints can be parametrized and extended by JSON configuration files in the backend side. The API will supply the menu estructure and security check based on the user's security group, and GenericSuite will draw the menu and available options.
- **Customizable Login Interface:** Easily adapt the login page to match your brand identity with the App logo.
- **Development and Production Scripts:** Quick commands to start development or build your application for QA, staging production environments on AWS.
- **Testing with Jest:** Comes pre-configured with Jest for running tests, including an initial test for the `<App />` component.
- **Inclusion of Essential Files:** `.env.example` for environment variables setup, `Makefile` to short-cut frequent operations, `webpack.config.js` and `config-overrides.js` to run the App locally with `Webpack` or `react-app-rewired`, `scripts` with development and production scripts, 
 and `CHANGELOG.md` for tracking changes across versions.

The perfect companion for this frontend solution is the [backend version of The GenericSuite AI](https://github.com/tomkat-cr/genericsuite-be-ai).

GenericSuite AI (frontend version) is based on [The GenericSuite](https://github.com/tomkat-cr/genericsuite-fe).

## Pre-requisites

You need to install these tools:

- [Node](https://nodejs.org/en/download/package-manager) 18+
- [Git](https://www.atlassian.com/git/tutorials/install-git)
- Make: [Mac](https://formulae.brew.sh/formula/make) | [Windows](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows)

## Getting Started

To get started with GenericSuite AI, follow these simple steps:

1. **Initiate your project**

   Create the ReactJs App. E.g. `exampleapp_frontend`:

   ```bash
   npx create-react-app exampleapp_frontend
   ```
   NOTE: Check the documentation [here](https://react.dev/learn/start-a-new-react-project) for alternatives.

   Change to your frontend local development directory.<br/>
   ```bash
   cd exampleapp_frontend
   ```

   CRA (`create-react-app`) is outdated, so we use [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) to to customize CRA configuration without the need to eject:

   ```bash
   npm install --save-dev react-app-rewired
   ```

   Initialize the git respository:

   ```bash
   git init
   ```

2. **Install Library**

   ```bash
   npm install genericsuite-ai
   ```

3. **Install additional development dependencies**:
```bash
npm install --save-dev \
   @babel/cli \
   @babel/core \
   @babel/plugin-proposal-class-properties \
   @babel/plugin-proposal-private-property-in-object \
   @babel/plugin-syntax-jsx \
   @babel/preset-env \
   @babel/preset-react \
   @babel/preset-stage-0 \
   @babel/preset-typescript \
   @testing-library/jest-dom \
   @testing-library/react \
   @testing-library/user-event \
   @types/jest \
   @types/react \
   babel-jest \
   babel-loader \
   babel-plugin-css-modules-transform \
   file-loader \
   html-webpack-plugin \
   jest \
   jest-environment-jsdom \
   path \
   postcss \
   postcss-loader \
   react-test-renderer \
   style-loader \
   tailwindcss \
   url-loader \
   webpack \
   webpack-cli \
   webpack-dev-server \
   whatwg-fetch
```

4. **Prepare the Configuration File**:

   Copy the template from `node_modules/genericsuite-ai`:

   ```bash
   cp node_modules/genericsuite-ai/.env.example ./.env
   ```
   
   And configure the variables according your needs:

   1. Replace `exampleapp` with your App's name.

   2. Replace `url-qa`, `url-staging` and `url-prod` with the corresponding public domain names for your App environments.

   3. Configure your desired `RUN_METHOD`. Available options are "webpack" and "react-scripts". Defaults to "webpack".

   4. Configure `BACKEND_PATH` with the path for your backend API local development repo.

   5. Configure `GITHUB_USERNAME` and `GITHUB_REPONAME`. It will be used by `scripts/aws_deploy_to_s3.sh` to change the `homepage` in `package.json` with the proper public domain during the AWS S3 deployment and restores to GITHUB_USERNAME.github.io/GITHUB_REPONAME after that.

   6. Configure `GIT_SUBMODULE_LOCAL_PATH` and `GIT_SUBMODULE_URL` with the JSON files submodule parameters to stablish a common configuration place for both frontend and backend (used by add_github_submodules.sh).<BR/>For example files, visit: [https://github.com/tomkat-cr/genericsuite-fe/tree/main/src/configs](https://github.com/tomkat-cr/genericsuite-fe/tree/main/src/configs)

   7. Configure the `AWS_*` parameters with your AWS data (used by aws_deploy_to_s3.sh and change_env_be_endpoint.sh). You'll need an AWS account.

5. **Prepare the Makefile**

   Copy the `Makefile` template from `node_modules/genericsuite-ai`:

   ```bash
   cp node_modules/genericsuite-ai/Makefile ./Makefile
   ```

6. **Change Scripts in Package.json**

   Open the `package.json`:

   ```bash
   vi ./package.json
   # or
   code ./package.json
   ```

   Add the homepage parameter:

   ```package.json
   "homepage": "https://your-github-username.github.io/your-github-repository/",
   ```
   ```
   NOTE: replace `your-github-username` and `your-github-repository` with your owns.
   ```
   
   Add the following scripts:

   ```package.json
     "scripts": {
         "start": "node server.js",
         "start-build": "./node_modules/react-app-rewired/bin/react-app-rewired.js build && node server.js",
         "start-debug": "ls -lah && node server.js",
         "start-dev": "react-app-rewired start",
         "start-dev-webpack": "npx webpack-dev-server --config webpack.config.js",
         "build-prod": "webpack --mode production",
         "build-dev": "react-app-rewired build",
         "build": "react-app-rewired build",
         "eject-dev": "react-scripts eject",
         "test-dev": "react-app-rewired test",
         "test": "jest",
         "predeploy": "npm run build",
         "deploy": "gh-pages -d build"
      },
   ```

## App structure

This is a suggested App development repository structure:

```
.
├── .babelrc
├── .env
├── .env.example
├── .gitignore
├── CHANGELOG.md
├── LICENSE
├── Makefile
├── README.md
├── babel.config.js
├── config-overrides.js
├── jest.config.cjs
├── package-lock.json
├── package.json
├── public
├── server.js
├── src
│   ├── components
│   │   ├── About
│   │   │   └── About.jsx
│   │   ├── App
│   │   │   ├── App.jsx
│   │   │   └── App.test.tsx
│   │   ├── HomePage
│   │   │   ├── HomePage.jsx
│   │   ├── ExampleMenu
│   │   │   ├── ExampleMainElement.jsx
│   │   │   └── ExampleChildElement.jsx
│   ├── constants
│   │   └── app_constants.jsx
│   ├── images
│   │   ├── app_logo_circle.svg
│   │   └── madeby_logo_square.svg
│   ├── configs
│   │   ├── CHANGELOG.md
│   │   ├── README.md
│   │   ├── backend
│   │   │   ├── app_main_menu.json
│   │   │   ├── endpoints.json
│   │   │   ├── general_config.json
│   │   │   ├── example_main_element.json
│   │   │   └── example_child_element.json
│   │   └── frontend
│   │       ├── app_constants.json
│   │       ├── general_constants.json
│   │       ├── users_profile.json
│   │       ├── example_main_element.json
│   │       └── example_child_element.json
│   ├── d.ts
│   ├── index.jsx
│   ├── input.css
│   └── setupTests.js
├── tailwind.config.js
├── tsconfig.json
├── version.txt
└── webpack.config.js
```

## Configure the project

Click [here](https://github.com/tomkat-cr/genericsuite-fe/blob/main/README.md#configure-the-project) for more information about how to configure the project.

## Code examples and JSON configuration files

The main menu, API endpoints and CRUD editor configurations are defined in the JSON configuration files.

You can find examples about configurations and how to code an App in the [GenericSuite App Creation and Configuration guide](https://github.com/tomkat-cr/genericsuite-fe/blob/main/src/configs/README.md).

## Start Development Server

To start the development server:

   ```bash
   make run
   ```

## Deploy QA

To perform a QA deployment over AWS S3:

   ```bash
   make deploy_qa
   ```

## License

GenericSuite is open-sourced software licensed under the MIT license.

## Credits

This project is developed and maintained by Carlos J. Ramirez. For more information or to contribute to the project, visit [GenericSuite AI on GitHub](https://github.com/tomkat-cr/genericsuite-fe-ai).

Happy Coding!