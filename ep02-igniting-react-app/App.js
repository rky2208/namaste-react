import React from "react";
import { createRoot } from "react-dom/client";
const h1ElementObj =  React.createElement("h1",{id:"header"},"Hello basic react app!!");

const root = createRoot(document.getElementById("root-container"));
root.render(h1ElementObj);