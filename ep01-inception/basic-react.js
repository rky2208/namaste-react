// Example: 1
const h1ElementObj = React.createElement(
                      "h1",
                      {id:"header"},
                      "Hello World!!! with react-js"
                    );
const rootContainer = ReactDOM.createRoot(document.getElementById("react-root-container"));
rootContainer.render(h1ElementObj);

// Example: 2
const parentH1ElementObj =  React.createElement(
                            "h1",
                            {id:"parent-header"},
                            [
                                React.createElement(
                                "p",
                                {id:"child-p1",key:"1"},
                                "child-1"
                                ),
                                React.createElement(
                                "p",
                                {id:"child-p2",key:"2"},
                                "child-2"
                                )
                            ]
                            );
const nestedContainerRoot = ReactDOM.createRoot(document.getElementById("react-root-container-nested-child"));
nestedContainerRoot.render(parentH1ElementObj);               
