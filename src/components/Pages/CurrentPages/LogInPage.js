import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Logo from "./Tempo-Logo-Grey.png"
import Text_ from "./Tempoture-Text.png"
import { Text, StyleSheet } from 'react-native';

require('dotenv').config()

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-top-read",
  "user-modify-playback-state",
];

const handleLogin = () => { 
  localStorage.setItem('isAuthenticated', true);

  if(document.getElementById("check").checked == true){
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${
      process.env.REACT_APP_CLIENT_ID }&redirect_uri=${
        process.env.REACT_APP_REDIRECT_URL}&scope=${
          scopes.join("%20")}&response_type=code&show_dialog=true`;
  } else {
    alert("Cannot login until User Agreement is accepted");
  }
};


//background fix
if (window.location.href=="http://localhost:3000/") {
  document.documentElement.style.setProperty('--activePage',"url('/static/media/pattern.35d74673.png')");
  //console.log("WORKS");
}

const LogInPage = (props) => {
  localStorage.setItem('isAuthenticated', false);
  return (
    <div className="login">
      <div class="container">
        <div className = "logo">
            <img src={Logo} width="150px"></img>
        </div>
        <div className = "text">
            <img src={Text_} width="250px"></img>
        </div>
        <div className = "RCOS">
          An <a className = "Test" href = "https://rcos.io/">RCOS</a> Project
        </div>
        <div className = "Version">
            Version 1.0 Coming Summer 2021
        </div>
        <a className = "What" href = "/LearnMore">
            What is Tempoture?
        </a>
        <div className = "Agree">
          By checking the user agreement below I hereby expressively consent for this app to be able to use website tracking in regard to location data and to communicate with my Spotify account's currently playing data, recently played data, playback state data and playlist data for the next 30 days.
        </div>
        <div className="Checkbox">
          <input type="checkbox" className="Check" id="check" />
          <label className="Label"> Accept User Agreement</label>
        </div>
        <Button variant="info" type="submit" onClick={handleLogin}>
          Login to Spotify {process.env.SPOTIFY_CLIENT_ID}
        </Button>
      </div>
      <div className = "Spotify">
        Don't have Spotify? <a className = "Click" href = "https://www.spotify.com/us/">Click here</a>
      </div>
    </div>
  );
};

export default connect()(LogInPage);