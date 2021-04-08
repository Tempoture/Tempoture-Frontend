import React from 'react';
import TempLogo from '../CurrentPages/Tempo-Logo-Grey.png'
import gitLogo from '../Images/GithubDesktopLogo.png'
import RcosR from '../Images/RCOSlogo.png'
import TempText from '../CurrentPages/Tempoture-Text.png'
import { Button } from 'react-bootstrap';

const handleLogOut = () => { 
    localStorage.clear();
    window.location = '/';
};

const InfoPage = () => {
    return (
        <content>
            <div class = "content_info">
                <div class = "newcontainer">
                    <p className="banner">
                    <img src={TempText} 
                            width="400px"/>
                    </p>
                    <p className="subtitle"> Thank you</p>
                        <p className="infoBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="subtitle"> Your Data</p>
                    <p className="infoBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                    <p className="footer">
                        <div class="infoImg">
                            <a href="https://github.com/Tempoture">
                                <img src={gitLogo} 
                                width="67px" height="67px"/>
                            </a>
                            <img src={TempLogo} width="75px" height="65px"/>
                            <a href="https://rcos.io/">
                                <img src={RcosR} 
                                width="61px" height="61px"/>
                            </a>  
                        </div>
                        An RCOS Project :)
                    </p>
                    <Button variant="info" type="submit" onClick={handleLogOut}>
                                Logout {process.env.SPOTIFY_CLIENT_ID}
                    </Button> 
                </div>
            </div>
       </content>
        );
};

export default InfoPage;