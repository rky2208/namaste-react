# IGNITING FIRST REACT APP
- Generally people uses some packages/library using npx to create the basic React Scaffold
    for ex: npx create-react-app first-project
- But now we will be setting up the everything from scratch, so follow the below steps
    - I want to create a basic reate app which display the header text "Hello basic react app"
    step 1: create a index.html file have the div root container in the body
    step 2: create App.js file where we will create the JS logic to create and render the header into div root container of index.html
    step 3: connect this App.js file with index.html using script tag in index.html
    step 4: now we want React Dependency/library so that we can use in app.js, to add the that let's create a package.json file
    using npm or we can create manually as well.
        npm i : this command will create package.json file with common default values
    step 5: install the react and react-dom dependency
        npm i react react-dom
    step 5: install parcel bundler so that we can use it run the code on local server and for other benifits
     as mentione in the definition.
    step 6: now to run the code on local server with development build 
            npx parcel index.html : here index.html file is the entry file of the project
        NOTE: if you want to build and run production build file locally we can run below command
            npx parcel build index.html

    step 6: create .gitignore to ignore the files that we don't want to commit and we can regenrate the same using the command
            /node_modules
            /.parcel-cache
            /dist


# Terminology
1. What is React?
    - ReactJS is an open-source JavaScript library used to create user interfaces in a declarative and efficient way.
    - Using React along with other packages and library like parcel,redux and so many more we can create a scalable, optimize ,powerfule and fast UI.

2. NPM Vs NPX
    - NPM: 
        - is packagage manager and it's consist of two parts
            - a CLI (command-line interface) tool for publishing and downloading packages, and
            - an online repository that hosts JavaScript packages
        - we can scope-in/use npm in our node-project(js/react etc) through package.json
            - npm i : to create package.json 


3. Details about package.json properties
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
            - we can also 

        - HRM ( HOT MODULE REPLACEMENT):
            - It will automatically rebuild your app as you change files [No need to refresh the browser].
        - Diagnostics:
            - If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
        
        - for more details: https://parceljs.org/

