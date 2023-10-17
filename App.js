import React from "react";
import ReactDOM from "react-dom/client";

// creation of nested element
const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "Hi i am Subhajeet!"), React.createElement("h1", {}, "Exploring the ignition process!")]
))



// creation of a single element
const heading = React.createElement("h1", {id: 'parent'}, "Hello World using React!");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);