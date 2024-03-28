import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

    const [btnValue, setBtnValue] = useState("Login");

    const onlineStatus = useOnlineStatus();

        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                </div>

                <div className="nav-items">
                    <ul>
                        <li> Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/about">About</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        <li>Cart</li>
                        <li> <Link to="/grocery">Grocery</Link></li>
                        <button onClick={() =>{
                            btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
                        }} className="login-btn">{btnValue}</button>
                    </ul>
                </div>

            </div>
        )
}

export default Header;