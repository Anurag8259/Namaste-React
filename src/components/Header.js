import {LOGO_URL} from "../utils/constants"; // Named Import - Importing a named export from a module. The name of the import should be same as the name of the export.
import {useState} from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    // const btnName = "Login";

    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src={LOGO_URL}/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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
