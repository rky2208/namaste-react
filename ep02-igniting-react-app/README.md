# IGNITING FIRST REACT APP
First, we have created a simple HTML, JS and React APP (using CDN). But is it ready to ramp up production? NO, because
That's not optimized code and faster. So we need to customize it, bundle it , code minification,code splitting etc. and TO do that we use other packages. So now it's time to Ignite the app from Basic -> Product level. 
- Now React can't do all the optimization alone, this makes the app faster than a native JS app to some extent. but have to make
It's faster and product ready, we have to use react as well as other packages.

- Generally people uses some packages/library using npx to create the basic React Scaffold
    for ex: npx create-react-app first-project

- But now we will setup everything from scratch, so follow the steps below
    - I want to create a basic React app that displays the header text "Hello Basic React App".
    Step 1: Create an Index.html file that contains the div root container in the body
    Step 2: Create the App.js file where we will create the JS logic to create the header and render it in the div root container of index.html
    Step 3: connect this App.js file with index.html using script tag in index.html
    Step 4: Now we want the React dependency/library so that we can use it in app.js to add it, let's create a package.json file
    By using npm or we can also create manually.
        npm init : This command will create a package.json file with the usual default values.
    Step 5: Install React and react-dom dependencies
        npm i react react-dom
    Step 6: Install Parcel Bundler so we can use it to run code on a local server and other benefits
     As stated in the definition.
    Step 7: Now  to run the code on the local server with the development build 
            npx parcel index.html: Here index.html file is the entry file of the project
        Note: If you want to create and run the production build file locally we can run the command below
            npx parcel build index.html

    step 8: create .gitignore to ignore the files that we don't want to commit and we can regenerate the same using the command
            /node_modules
            /.parcel-cache
            /dist


# Terminology
1. What is React?
    – ReactJS is an open-source JavaScript library that is used to create user interfaces in a declarative and efficient manner.
    - Using React with Parcel, Redux and many other packages and libraries we can create a scalable, optimized, powerful and fast UI.

2. NPM vs NPX
    - npm: 
        - is a package manager and consists of two parts
            - A CLI (command-line interface) tool for publishing and downloading packages, and
            – an online repository that hosts JavaScript packages
        - We can scope-in/use npm in our node-project (js/react etc) through package.json
            - npm i : to create package.json


3. Details about package.json properties
    - It's configuration (in JSON format) of our project, for npm.
    - devDepency: packages that requires to during the development {npm i -D <package-name>}
    - dependency: packages that rquires durind both development and production(server)
    - name: the name of your JavaScript library/project
    - browseslist: a configuration file that determines which browsers your project should support.
        for more details of browserlist: https://github.com/browserslist/browserslist
    - for more details of package.json: https://docs.npmjs.com/cli/v10/configuring-npm/package-json

4. What is Parcel?
- Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.
    - npm i -D parcel : to install the parcel into our project as dev dependency
    It offers
        - developemnet server :
            - we can build and run our project on local server using :  
                npx parcel index.html
                    - by default it's build dev-build , if we want to build minified version(production-build ) and run
                        npx parcel build index.html

            - it will by default run on : http://localhost:1234/
            - we can also define port : parcel index.html --port <port-number>
        - HRM ( HOT MODULE REPLACEMENT):
            - It means that parcel will keep a track of all the files which you are updating.
            - There is File Watcher Algorithm (written in C++). It keeps track of all the files which are changing realtime and it tells the server to reload.
        - parcel-cache:
            - Parcel caches code all the time. When we run the application, a build is created which takes some time in ms.
            - If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build. This reduction of time is due to parcel cache. parcel immediately loads the code from the cache every time there is a subsequent build. On the very first build parcel creates a folder .parcelcache where it stores the caches in binary codeformat.Parcel gives faster build, faster developer experience because of caching.
        - Diagnostics:
            - If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
        - for more details: https://parceljs.org/

5. Transitive Dependencies :
- We have our package manager which takes care of our transitive dependencies of our code. If we’ve to build a production ready app which uses all optimisations (like minify, bundling, compression, etc), we need to do all these.But we can’t do this alone, we need some dependencies on it. Those dependencies are also dependent on other dependencies.


6. dist:
- It keeps the files minified for us. When bundler builds the app, the build goes into a folder called dist.
- The `/dist` folder contains the minimized and optimised version the source code. along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
- When we run command: npx parcel index.html
    - This will create a faster development version of our project and serves it on the server.
- When I tell parcel to make a production build: npx parcel build index.html
    - It creates a lot of things, minify your file. And the parcel will build all the production files to the dist folder.

7. Browserslist:
- Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app. It makes our code compatible for a lot of browsers.
- In package.json file do: 
    - "browserslist":[
    "last 2 versions"
  ]
    - supports 74% of all the browsers
    - means my parcel will make sure that my app works in last 2 versions of all the browsers available. By minimifiying code according to different version of browers. 


8. Tree Shaking:
- Tree shaking is a process of removing the unwanted code that we do not use while developing the application.
- In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.