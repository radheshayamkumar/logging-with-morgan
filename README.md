# Logging with Morgan

![Morgan Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/320px-Expressjs.png)

## Overview

This project demonstrates how to integrate **Morgan** with **Winston** for structured request logging in a **Node.js + Express** application. It also includes **MongoDB** connectivity using Mongoose and a basic API route.

## Features

- **Structured Request Logging**: Uses Morgan with Winston to log HTTP requests in JSON format.
- **Express Middleware**: Implements `body-parser` for request parsing.
- **MongoDB Integration**: Connects to a MongoDB Atlas database using Mongoose.
- **REST API Routes**: Includes item-related API routes (`/api/items`).

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **MongoDB Atlas** (or a local MongoDB instance)

### Clone the Repository

```sh
git clone https://github.com/radheshayamkumar/logging-with-morgan.git
cd logging-with-morgan


### Install Dependencies

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEditnpm install   `

Configuration
-------------

### MongoDB Connection

Ensure you have a MongoDB Atlas account and update the connection string inside index.js:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsCopyEditmongoose.connect('your-mongodb-connection-string');   `

Usage
-----

### Start the Server

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEditnode index.js   `

The server runs on **http://localhost:5000**.

Logging Implementation
----------------------

Morgan logs HTTP requests in a **custom JSON format** using Winston.

### Log Format:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsonCopyEdit{    "method": "GET",    "url": "/api/items",    "status": "200",    "responseTime": "5 ms"  }   `

### Example Log Output:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   shCopyEdit{"method":"GET","url":"/api/items","status":"200","responseTime":"5 ms"}   `

API Routes
----------

### Base URL:

http://localhost:5000/api/items

Ensure routes/itemRoutes.js is set up for handling API requests.

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   csharpCopyEditlogging-with-morgan/  │-- routes/  │   ├── itemRoutes.js  # API route handlers  │-- logger.js          # Winston logger configuration  │-- index.js           # Main Express application  │-- package.json       # Dependencies and scripts  │-- README.md          # Project documentation   `

Contributing
------------

Feel free to fork this repository, make improvements, and submit pull requests.

License
-------

This project is licensed under the **MIT License**.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   markdownCopyEdit  ---  🔹 **Changes made:**  1. **Fixed the Morgan logo** → Replaced it with the Express.js logo.  2. **Added a "Prerequisites" section** → Ensures users install Node.js and MongoDB.  3. **Included a "Project Structure" section** → Helps users understand the file organization.  This makes your `README.md` **professional, structured, and easy to follow**. Let me know if you need modifications! 🚀   ``

4o
