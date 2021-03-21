import React from 'react';
import * as IoIcons from 'react-icons/io';
import image from '../Navbar/Tempoture Logo.jpg'
import Navbar from "../Navbar/Navbar";

const InfoPage = () => {
    return (
        <div>
            <h1 className="infoTitle">Tempoture</h1>
            <h1 className = "infoSubtitle">Information</h1>
                <p className="infoContent">じゃがいは数少ないじゃじゃがいもとじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
            <h1 className="infoSubtitle"> Thank you</h1>
                <p className="infoContent">じゃがいもは、日本地方だけ数少ないじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
            <h1 className="infoSubtitle"> Your Data</h1>
            <p className="infoContent">じゃがいもは、日数少ないじゃじゃがいもとしては数少ないじゃじゃがいもとしては数少ないじゃじゃがいもじゃがいもとしては数少ないじゃがいものひとつです</p>
           <h1 className = "infoImg">
               <IoIcons.IoLogoGithub/>
               <img src={image} width="80px" />
           </h1>
           <h1 className="infoFooter">An RCOS Project :)</h1>

       </div>
        );

};

export default InfoPage;