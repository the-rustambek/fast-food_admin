import React from "react";
import "./Header.css";
import Search from "../../Assets/Images/Search.png";
import Avatar from "../../Assets/Images/Profile2.png";

import "../Dashboard/Dashboard.css"
const Header = () =>{

return (
<div className="header">
   
    <div className="header-left">
        <input type="text" className="header-input" placeholder="User" required name="user" />
        <img className="header-search" src={Search} alt="Search" />
    </div>
    <div className="header-right">
        <span className="header-span">
            <img src={Avatar} alt="" className="header-avatar" />

        </span>

        <p className="header-name">
            Rustambek
        </p>
    </div>
</div>
)
}


export default Header;