# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

Module Federation Analysis & React Integration Guide
This document provides an overview of the current Module Federation (MFE) architecture in your workspace and a manual step-by-step guide to implement it in a React application.

1. Current Architecture Analysis
Your current setup uses Angular 18 with @angular-architects/module-federation.

Shell Application (master)
Port: 5001
Role: Host (Consumer)
Configuration: 
webpack.config.js
 defines a remote named technologies.
Key Code:
javascript
remotes: {
  technologies: "technologies@http://localhost:4002/remoteEntry.js"
}
Remote Application (technologies)
Port: 4002
Role: Remote (Provider)
Configuration: 
webpack.config.js
 exposes a module.
Exposed Module: ./Module mapped to ./src/app/microfrontend1/microfrontend1.module.ts.
2. Micro-Frontend Concept in your Workspace
Micro-frontend architecture allows you to break down a monolithic application into smaller, independently deployable pieces.

master is the gateway; it handles navigation and layout.
technologies is a standalone feature that is "stitched" into master at runtime.
Shared Dependencies: Both apps share @angular/core, @angular/common, and @angular/router to avoid downloading multiple copies of the framework.
3. Manual Steps: Module Federation for React
If you want to add Module Federation to a new or existing React app, follow these manual steps.

Step 1: Install Dependencies
You need Webpack and the Module Federation plugin.

bash
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
(Optionally use module-federation/sdk for easier management in newer versions)

Step 2: Configure the Remote (Provider)
Create or update 
webpack.config.js
 in the React app you want to expose.

javascript
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 3002, // Port for your remote
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        // Path to the component you want to share
        "./MyComponent": "./src/components/MyComponent",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
Step 3: Configure the Host (Consumer)
In your main React app (master equivalent):

javascript
new ModuleFederationPlugin({
  name: "hostApp",
  remotes: {
    remoteApp: "remoteApp@http://localhost:3002/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^19.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
  },
}),
Step 4: Import and Use the Remote Component
In your Host app code, use React.lazy to load the remote module:

javascript
import React, { Suspense } from "react";
// The name 'remoteApp/MyComponent' matches the 'remotes' key and 'exposes' key
const RemoteComponent = React.lazy(() => import("remoteApp/MyComponent"));
function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
}
export default App;
Step 5: Handling Styles
Ensure that both apps are configured to handle CSS properly in Webpack (e.g., style-loader, css-loader).

4. Summary Table
Feature	Remote Area	Host Area
Webpack Plugin	Define name, filename, exposes	Define name, remotes
URL	Needs to match port in Host config	hostname@URL/remoteEntry.js
React Code	Normal export	React.lazy(() => import("name/exposedKey"))
TIP

Always ensure react and react-dom are set as singletons in both configurations to prevent multiple instances of React from running, which causes runtime errors.