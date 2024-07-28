import React from "react";
import { createRoot } from "react-dom/client";

//React.createElement => React Element(Js Object) => HtmlElement (render)
const h1ElementObj =  React.createElement("h1",{id:"header"},"Hello basic react app!!");

// JSX (Parcel -> Babel : Transpiled it (Convert it to React.CreateElement)before raching to Js engine s)
// JSX => React.createElement => React Element(Js Object) => HtmlElement (render)
const h2ElementObj = <h1 id ="header">Hello basic react app!!</h1>

//React Component
// -  class based component
// - functional based componet
// Component name must be be start with capital letter to differentiate b/w normal fun & component, else it will not work & throw warning. 

const maxNum = 10000;
// A JS function Which returns the React Element, Called as functional component
const Heading = ()=>{
    return( 
        <> 
        {/* we can use normal js indside curly braces */}
        {h2ElementObj}
        {maxNum}
        <h1>Hiii</h1>
        </>
    )
}

//Using a component inside Another component is called as Component compositin
const MainComponent = ()=>{
    return(
        <>
        <h1>Main Comp</h1>
        <Heading/>
        </>
    )

}

const root = createRoot(document.getElementById("root"));
root.render(<MainComponent/>);