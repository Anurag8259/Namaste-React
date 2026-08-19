import {LOGO_URL} from "../utils/constants"; // Named Import - Importing a named export from a module. The name of the import should be same as the name of the export.
import {useState, useEffect} from "react";
import {Link} from "react-router";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    // const btnName = "Login";

    // If no dependency array - useEffect will be called on every render of the component.
    // if empty dependency array - useEffect will be called only once when the component is mounted.
    // if dependency array has some state variable - useEffect will be called only when that state variable is updated.
    useEffect(()=>{
        console.log("useEffect called");
    },[]);

    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src={LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    {/* This wont work as btnName is a regular variable, not a React state */}
                    {/* btnName will update but UI wont render as it will not refreshed */}
                    {/* Beacuse of diff algo only the button re-rebders not the entire DOM */}
                    <li className = "login-button" onClick = {()=>{btnName === "Login"? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
