import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

    const [btnValue, setBtnValue] = useState("Login");

    const onlineStatus = useOnlineStatus();

        return (
            <div className="flex justify-between bg-blue-400">
                <div className="logo-container">
                    <img className="w-36" src={LOGO_URL} />
                </div>

                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <li className=" px-4 "> Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                        <li className=" px-4 "> <Link to="/">Home</Link></li>
                        <li className=" px-4 "> <Link to="/about">About</Link></li>
                        <li className=" px-4 "> <Link to="/contact">Contact</Link></li>
                        <li className=" px-4 ">Cart</li>
                        <li className=" px-4 "> <Link to="/grocery">Grocery</Link></li>
                        <button onClick={() =>{
                            btnValue === "Login" ? setBtnValue("Logout") : setBtnValue("Login");
                        }} className=" px-4 ">{btnValue}</button>
                    </ul>
                </div>

            </div>
        )
}

export default Header;