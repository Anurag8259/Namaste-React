import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", {id : "heading"} , "Hello World from React!"); // {} - attributes , eg ; {id: "title"} 

// heading : If we do console.log(heading) , it will give us a object which is called React Element. It is a object representation of the HTML element.
// props : The attributes passed in the second argument of React.createElement()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Renders the React element into the DOM



const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello from h1 tag"))); // Object / react element
// root.render(parent);




const parent1 = React.createElement("div", { id: "parent2" }, React.createElement("div", { id: "child2" }, 
    [React.createElement("h1", {}, "Hello from h1 tag"), React.createElement("h2", {}, "Hello from h2 tag")]));
root.render(parent1); // Content of root will be replaced with parent1 and previous content will be removed. So only last render will work.

// i am using multiple render in this file but why is only last render working ? - Tis is because ReactDOM.render() replaces the existing content of the root element with the new content. When you call root.render() multiple times, it will overwrite the previous render and only display the last one. If you want to render multiple elements, you should combine them into a single React element or use a parent container to hold them together.
// Due to this nested lengthy code , we have JSX.