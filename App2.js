import React from "react";
import ReactDOM from "react-dom/client";

// heading is an object .
const heading = React.createElement("h1",{id:"heading"},"Hello Wassup!");

console.log(heading);//Same

// JSX
const jsxHeading =( 
<h1 className = "head" tabIndex = "5">
    Hello from JSX !!
</h1>);
// JSX is not html inside js. It is html like syntax which is converted into React.createElement() by babel compiler.
// This is not valid pure JS syntax, as JS engine only understands ECMAScript.
// JSX is transpiled into React code by babel compiler(PARCEL dependency). (JavaScript Compiler - JSX to React)
// JSX => React.createElement() => React Element(JS Object) => HTML DOM

console.log(jsxHeading);//Same

//React Component

// React Functional Component
// name starting with capital letter
// Returns JSX/React Element
const HeadingComponent = () => {
    return <h1> Hello from Functional Component !! </h1>
}

//OR

const HeadingComponent2 = () => <h1> Hello from Functional Component 2 !! </h1>



const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM converts the heading object into React element.
root.render(jsxHeading);