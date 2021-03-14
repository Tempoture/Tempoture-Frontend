import React from 'react';
import Navbar from "../Navbar/Navbar";
import * as IoIcons from 'react-icons/io';
import image from '../Navbar/Tempoture Logo.jpg'

const AboutUsPage = () => {
    return (
        <div>
           <Navbar />
            <h1 className="title">Tempoture</h1>
            <h1 className = "subtitle">About Us</h1>
                <p className="content">じゃがいは数少ないじゃじゃがいもとじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
            <h1 className="subtitle"> Thank you</h1>
                <p className="content">じゃがいもは、日本地方だけ数少ないじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
            <h1 className="subtitle"> Your Data</h1>
            <p className="content">じゃがいもは、日数少ないじゃじゃがいもとしては数少ないじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
           <h1 className = "img">
               <IoIcons.IoLogoGithub/>
               <img src={image} width="80px" />
           </h1>
           <h1 className="footer">An RCOS Project :)</h1>

       </div>
        );

};

export default AboutUsPage;