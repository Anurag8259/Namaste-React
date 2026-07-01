import React from "react";
import ReactDOM from "react-dom/client";




const Title = () => (
    <div>
        {/* <Heading/>   --  It will lead to infinite loop ---  we can call a component inside an element/component*/}
        <h1>This is a Title !! </h1>
    </div>
);


const head = (
    <h1>
        <Title/>
        Hello from React Element
    </h1>
);

const number = 1000;

const Heading = () => (
    <div id = "container">
        {head}
        {1+10}
        <h2>{number}</h2>
        {/* We can use JavaScript expressions inside curly braces. */}
        <Title/> 
        {/* // This is called Composition of Components. We can use one component inside another component. */}
        <h1 className="heading" tabIndex = "5">Hello from React Functional Component</h1>
    </div>
);
//OR
// We can also write this like a normal js function instead of arrow function. But we need to use return keyword in that case.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading); - WRONG

root.render(<Heading/>); //Correct