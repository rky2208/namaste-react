# ---------- NAMASTE-REACT: EP-01 SUMMARY ----------
a. Create a Hello World Header with HTML
b. Create a Hello World Header with Javascript
c. Create a Hello World Header with react
    -   Add CDN for that into index.html
        -   <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
                # A small JS utility file (Library) (Can be used for REACT-NATIVE, REACT-JS and OTHER JS Project)
        -   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
                # A JS DOM Utility file which acts as intermediator b/w React-JS and Web Browser DOM 
    - We can use React CDN for any small JS project


# ----------- IMPORTANT POINTS ----------
1. React.createElement VS document.createElement
    # document.createElement - used to create HTML element which is an tag.
        const h1Element = document.createElement("h1");
        console.log(h1Element);
        // output: <h1>Hello World!! with pure-html</h1>

    # React.createElement - used to create React Element which is an object.
        const h1ElementObj = React.createElement("h1",{id:"header"},"Hello World!!! with react-js");
        console.log(h1ElementObj); 
        // output:{
                    "type": "h1",
                    "key": null,
                    "ref": null,
                    "props": {
                        "id": "header",
                        "children": "Hello World!!! with react-js"
                    },
                    "_owner": null,
                    "_store": {}
                }



2. ReactDOM.createRoot VS ReactDOM.render

    // ----ReactDOM.render-----
        const container = document.querySelector('#root');
        // Initial render. Container is explicitly accessed.
        ReactDOM.render(<App text="Hello" />, container);

        // Subsequent renders. Container is explicitly accessed.
        ReactDOM.render(<App text="Hello world!" />, container);

    // ----ReactDOM.createRoot-----
        // First, we create a root
        const root = ReactDOM.createRoot(document.querySelector('#root'));

        // Initial render. Container is implicitly accessed.
        root.render(<App name="Hello" />);

        // Subsequent renders. Container is implicitly accessed.
        root.render(<App name="Hello world!" />);

    a. the primary distinction between createRoot and ReactDOM.render is that createRoot generates a new root container for rendering components, whereas ReactDOM.render renders components directly to a given DOM element.

    b. The primary reason for the React 18 ReactDOM.render deprecation is usability. As shown above, with createRoot we can manage multiple calls to render() with the same root and the same DOM container element, leading to less boilerplate code and a cleaner API.







