import React from 'react';
import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp, Mail, Feedback, ChatBubble } from "@mui/icons-material"
import premier from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/premier.jpg";
import laliga from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/laliga.png";
import seriea from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/seriea.png";
import eredivise from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/eredivise.png";
import ligue1 from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/ligue1.png";
import premeiraliga from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/premeiraliga.jpg";
import bundesliga from  "C:/Users/HALIMA/projects/betsitelandingpage/src/components/assets/bundesliga.jpg";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="container sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                           <Link to="/" className="sidebarLink">Home</Link> 
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            <Link to="/analytic" className="sidebarLink">Analytics</Link>
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            <Link to="/trending" className="sidebarLink">Trending</Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail className="sidebarIcon"/>
                            <Link to="/mail" className="sidebarLink">Mail</Link>
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            <Link to="feedback" className="sidebarLink">Feedback</Link>
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubble className="sidebarIcon"/>
                            <Link to="messages" className="sidebarLink">Messages</Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h4 className="subTitle">League Names</h4>
                    <ul className="leagueList">
                        <li className="leagueListItem">
                            <img src={premier}  alt="Premier League logo" className="league"/>
                            Premier League
                        </li>
                        <li className="leagueListItem">
                            <img src={laliga} alt="La liga logo" className="league"/>
                            La Liga 
                        </li>
                        <li className="leagueListItem">
                            <img src={seriea} alt="Serie A logo" className="league"/>
                            Serie A 
                        </li>
                        <li className="leagueListItem">
                            <img src={eredivise} alt="Eredivise League logo" className="league"/>
                            Eredivise 
                        </li>
                        <li className="leagueListItem">
                            <img src={ligue1} alt="Ligue 1 logo" className="league"/>
                            League 1
                        </li>
                        <li className="leagueListItem">
                            <img src={premeiraliga} alt="Premeira Liga logo" className="league"/>
                            Premeira Liga
                        </li>
                        <li className="leagueListItem">
                            <img src={bundesliga} alt="Bundesliga logo" className="league"/>
                            Bundesliga
                        </li>
                    </ul>
                </div>   
            </div>
        </div>
    )
}

export default Sidebar


