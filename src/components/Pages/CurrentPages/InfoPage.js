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
        <div class = "infoContainer">
            <p className="banner">
            <img src={TempText} 
                    width="400px"/>
            </p>
            <p className="subtitle"> Thank you</p>
                <p className="infoBody">Tempoture is an open source application that recommends Spotify music playlists based on weather data in your area. We are an open source development team from the Rensselaer Center for Open Source and we're thankful that you willing to help us train our machine learning model. Our first version of the app will be released in the Summer of 2021 and it will be free to use, so keep an eye out for that! </p>
            <p className="subtitle"> Your Data</p>
            <p className="infoBody">The data we are collecting to train our machine learning model that predicts genre and produces playlists includes Spotify read data which consists of listening history for the past 30 days and listening history for the next 30 days as well as weather data in your area based on zip code.  </p>

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
    );
};

export default InfoPage;