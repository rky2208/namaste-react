# ------------- Laying the foundation ----------

- Previously we have ignite our app with package.json , parcel & react. To run the file we have start the local server using parcel.
- npx parcel index.html : we are executing parcel package using npx & giving the index.html as resource to parce to run on default local server 1234 port.
    - We can create different scripts for starting our project in Development and Production.
    - In package.json , in the script section write the following command.
        "scripts": {
                "start": "parcel index.html",
                "build":"parcel build index.html",
                "test": "echo \"Error: no test specified\" && exit 1"
        },
            - we can give any name for script keys
            - To run these scripts, enter the following commands in the terminal,
                - To start: npm run start or  npm start 
                        - start is a keyword which is reserved by npm, it's only work with start. if we try npm build it will not work, we have to write npm run build, then only it will work.
                - For Production Build: npm run build   



# ---- Introducing JSX.------
Before we begin, we have to remove the existing React Code from App.js where we used React.createElement() for displaying content
on the webpage but its syntax is very bad. It’s not developerfriendly, and very hard to read. To solve this problem Facebook
developers built JSX. JSX makes developer life easy as we no longer have to write our code using React.createElement().

1. Q ) What is JSX?
- JSX is HTML-like or XML-like syntax. JSX stands for JavaScript XML. It's a syntax extension for JavaScript.
- It is not a part of React. React apps can be built even without JSX but the code will become very hard to read.
- It is not HTML inside JavaScript.
- JavaScript engine cannot understand JSX as it only understands ECMAScript
    // using pure react
    const el =  React.createElement("h1",{id:"heading"},"Hello")

    //using JSX
    const el =  <h1 id="heading">Hello</h1>
    If  we console log both el, it gives the same object.

2. Q ) What is the difference between HTML and JSX?
- JSX is not HTML. It’s HTML-like syntax.
- HTML uses ‘class’ property whereas JSX uses ‘className’ property
- HTML can use hypens in property names whereas JSX uses camelCase syntax. 

3. Single Line and Multi Line JSX Code
- If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory. To tell Babel from where JSX is starting and ending.
const jsxHeading = (
 <div>
 <h1>Namaste React</h1>
 </div>
)


# ---- Introducing Babel ----
1. Q ) Is JSX a valid JavaScript?
- The answer is yes and no.
    - JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand. JS does not have built-in JSX. The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code.

2. Q ) If the browser can’t understand JSX how is it still working?
- This is because of Parcel because “Parcel is a Beast”. Before the code gets to JS Engine it is sent to Parcel and Transpiled there. Then after transpilation, the browser gets the code that it can understand.
    Transpilation ⇒ Converting the code in such a format that the browsers can understand. 
- Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.
- Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’. It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file. It is not created by Facebook.
- Bable do a lot more thing than just converting jsx, it also convert the New JS code which is not understand by Old browser to the formate which they can also understand.
- A transpiler converts source code from one programming language to another, while a compiler translates source code into machine code.
- Learn more about Babel on babeljs.io
    JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement (JS Object) ⇒ HTML Element(render)


# -------- Introducing React Components -------
1. Q ) What are Components?
There are 2 types of components:
    - Class-based Components - Old way of writing code, used rarely in industry
    - Functional Components - New way of writing code, most commonly used

2. Q ) What is a React Functional Components?
- It is just a JavaScript Function that returns some JSX or a react element.
- Always name React Functional Component with Capital Letters otherwise you will confuse it with normal function
    // All are the same for single-line code
    const HeadingComponent1 = () => (
    <h1>Namaste</h1>
    )
    const HeadingComponent2 = () => {
    return <h1>Namaste</h1>
    }
    const HeadingComponent3 = () => <h1>Namaste</h1>
- To render a functional component we call them ‘<Heading1 />’. This is the syntax that Babel understands. 
- You can also call them using these ways,
    ‘<Title></Title>’
    or
    ‘{Title()}’

3. Components Composition
- A component inside a component. Calling a component inside another component is Component Composition.
    const Title = () => <h1>Namaste React</h1>
    const HeadingComponent = () => (
    <div id="container">
    <Title />
    </div>
    )
- Code inside the ‘Title’ component will be used inside the ‘HeadingComponent’ component as the ‘Title’ component is called inside it. It will become something like this,
    const HeadingComponent = () => (
    <div id="container">
    <h1>Namaste React</h1>
    </div>
    )
- When there are more than 1 element we have to wrap it into a single element or React.Fragement
    <div>
    <Comp1>
    <h1>h</h1>
    <div>

    or <React.Fragment> </React.Fragment> (or shortcut way of writting <></>) 

    <>
    <Comp1>
    <h1>h</h1>
    </>

4. Q ) How to use JavaScript code inside JSX?
- Inside a React Component when ‘{}’ parenthesis is present we can write any JavaScript expression inside it.
    const number = 10000;
    const HeadingComponent = () => (
    <div id="containter">
    {number}
    <h1>Namaste React</h1>
    </div>
    )

5. Q ) How to call React Element in JSX?
We can use ‘{}’ parenthesis.
    const elem = <span> React Element </span>
    const HeadingComponent = () => (
    <div id="containter">
    {elem}
    <h1>This is Namaste React</h1>
    </div>
    )

6. Q ) What will happen if we call 2 elements inside each other?
- If we put 2 components inside each other, then it will go into an infinite loop and the stack will overflow. It will freeze your browser, so it’s not recommended to do so.


# ----- Advantages of using JSX. ---
1) Sanitizes the data
If someone gets access to your JS code and sends some malicious
data which will then get displayed on the screen, that attack is
called cross-site scripting.
It can read cookies, local storage, session storage, get
cookies, get info about your device, and read data. JSx takes
care of your data.
If some API passes some malicious data JSX will escape it. It
prevents cross-site scripting and sanitizes the data before
rendering
2) Makes code readable
JSX makes it easier to write code as we are no longer creating
elements using React.createElement()
3) Makes code simple and elegant
4) Show more useful errors and warnings
5) JSX prevents code injections (attacks)
