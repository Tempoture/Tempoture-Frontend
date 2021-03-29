import React from 'react';
import image from '../../Navbar/Tempoture Logo.jpg'
import gitLogo from '../Images/GithubDesktopLogo.png'
import RcosR from '../Images/RCOSlogo.png'
const InfoPage = () => {
    return (
        <content>
            <div class = "content">
                <div class = "newcontainer">
                    
                    <p className="banner">Tempoture</p>
                    <p className="subtitle">Information</p>
                        <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="subtitle"> Thank you</p>
                        <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className="subtitle"> Your Data</p>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    <div class="infoImg">
                        <a href="https://github.com/Tempoture">
                            <img src={gitLogo} 
                            width="67px" height="67px"/>
                        </a>
                        <img src={image} width="75px" height="65px"/>
                        <a href="https://rcos.io/">
                            <img src={RcosR} 
                            width="61px" height="61px"/>
                        </a>
                    </div>
                    
                    <p className="footer">An RCOS Project :)</p>
                </div>
            </div>
       </content>
        );
};

export default InfoPage;