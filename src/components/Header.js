import {LOGO_URL} from "../utils/constants"; // Named Import - Importing a named export from a module. The name of the import should be same as the name of the export.
import {useState, useEffect} from "react";
import {Link} from "react-router";
import useOnlineTracker from "../utils/useOnlineTracker";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const isOnline = useOnlineTracker();

    // const btnName = "Login";

    // If no dependency array - useEffect will be called on every render of the component.
    // if empty dependency array - useEffect will be called only once when the component is mounted.
    // if dependency array has some state variable - useEffect will be called only when that state variable is updated.
    useEffect(()=>{
        console.log("useEffect called");
    },[]);

    return (
        <div className = "flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-200">
            <div className = "logo-container">
                <img className = "w-56" src={LOGO_URL}/>
            </div>
            <div className = "flex items-center ">
                <ul className = "flex p-4 m-4">
                    <li className = "px-4">
                        {isOnline ? "✅ Online" : "🔴 Offline"}
                    </li>
                    <li className = "px-4 cursor-pointer">
                    <Link to="/">Home</Link>
                    </li>
                    <li className = "px-4 cursor-pointer">
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className = "px-4 cursor-pointer">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className = "px-4 cursor-pointer">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    {/* This wont work as btnName is a regular variable, not a React state */}
                    {/* btnName will update but UI wont render as it will not refreshed */}
                    {/* Beacuse of diff algo only the button re-rebders not the entire DOM */}
                    <li className = "px-2 bg-green-200 cursor-pointer" onClick = {()=>{btnName === "Login"? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
