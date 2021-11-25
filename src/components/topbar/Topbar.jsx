import React from 'react'
import "./topbar.css";
import { NotificationsNone, Settings } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";



export default function Topbar() {
    return (
        <div className="container topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Betpage</span>
                </div>
                <div className="topRight">
                    <div className="entry"><Link to="signIn" className="link-form">SignIn</Link> /
                    <Link className="link-form" aria-current="page" to="/signUp">SignUp</Link>
                    </div>
                    
                    <div className="topbarIconContainer">
                        <SearchIcon />
                    </div>
                    
                    <div className="topbarIconContainer">
                        <NotificationsNone />    
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />    
                    </div>
                    <img src="https://image.shutterstock.com/image-vector/
                    avatar-asian-girl-happy-eastern-600w-1426681076.jpg" alt="Asian Girl" class="topavatar"/>
                </div>
            </div>
        </div>
    )
}
