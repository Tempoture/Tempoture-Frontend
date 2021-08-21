import React from "react";
import * as IoIcons from 'react-icons/io';
import * as WeatherIcons from "react-icons/wi";
import { AiOutlineGithub } from "react-icons/ai";


import Logo from './Tempo.png';
import male_icon from './male-icon.svg'
import tempGraph from './TemporaryGraph.png';
import songIMG from './Todays_Song.jpg';

import Chart from './Chart'

const SidebarPageData = [
  {
    title: 'Dashboard',
    path: '/Home',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Playlists',
    path: '/playlists',
    icon: <IoIcons.IoMdHeadset />,
    cName: 'nav-text'
  },
  {
    title: 'Artists',
    path: '/artists',
    icon: <IoIcons.IoMdMicrophone />,
    cName: 'nav-text'
  },
  {
    title: 'Statistics',
    path: '/statistics',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/info',
    icon: <IoIcons.IoMdInformationCircleOutline />,
    cName: 'nav-text'
  }
];

const SidebarSettingsLogoutData = [
  {
    title: 'Settings',
    path: '/settings',
    icon: <IoIcons.IoMdSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/log out',
    icon: <IoIcons.IoIosLogOut />,
    cName: 'nav-text'
  }
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
/**
    background: radial-gradient(#bbf5a1, #42dd69);
    background: radial-gradient(#99cadc, #3697e8);
    background: radial-gradient(#ca93ff, #9242dd);
    background: radial-gradient(#f09090, #b23653);
 */
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            contentWidth: 46,
        };
    }
 
    MouseOver = (event) => {
       console.log("Your Hovering Over Me");
       this.setState({contentWidth: 130 });
    }
    
    MouseOut = (event) =>{
        console.log("Your Not Hovering Over Me AnyMore");
        this.setState({contentWidth: 46 });
        
    }

    componentDidMount(){
       //console.log(getWindowDimensions().width);
    } 

  render() {
    return  <div className="page-wrapper">
                <div className="header-wrapper" >
                    <div className="logo-contnent-wrapper">
                        <div className="header-img-wrapper" >
                            <img alt='' src={Logo} />
                        </div>
                        <div className="header-logo-text">
                            Tempoture
                        </div>
                    </div> 
                    <div className="profile-icon-wrapper">
                          <img alt='' src={male_icon} />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="new-sidebar"  onMouseOver={this.MouseOver} onMouseOut={this.MouseOut}>
                        <div className="new-top-sidebar-items">
                            {SidebarPageData.map((item) => {
                                return  (item.title === 'Dashboard') ?  <div className="new-sidebar-item" style={{ background: '#4a4a4a' }}>
                                                                            <div className="new-sidebar-item-slected" />
                                                                            <div className="new-sidebar-icon" > {item.icon} </div>
                                                                            <div className="new-sidebar-text"> {item.title} </div>
                                                                        </div>
                                                                    :  <div className="new-sidebar-item">
                                                                            <div className="new-sidebar-icon" > {item.icon} </div>
                                                                            <div className="new-sidebar-text"> {item.title} </div>
                                                                        </div>
                            })}
                        </div>
                        <div className="new-bottom-sidebar-items">
                            {SidebarSettingsLogoutData.map((item) => {
                                return (item.title === 'Dashboard') ?   <div className="new-sidebar-item" style={{ background: '#4a4a4a' }}>
                                                                            <div className="new-sidebar-item-slected" />
                                                                            <div className="new-sidebar-icon" > {item.icon} </div>
                                                                            <div className="new-sidebar-text"> {item.title} </div>
                                                                        </div>
                                                                    :   <div className="new-sidebar-item">
                                                                            <div className="new-sidebar-icon" > {item.icon} </div>
                                                                            <div className="new-sidebar-text"> {item.title} </div>
                                                                        </div>
                            })}

                        </div>
                    </div>
                    <div className="new-content" style={{width: `${getWindowDimensions().width - this.state.contentWidth}px` }}>
                        <div className="top-content-grid"> 
                            <div className="content-grid-graph-cell" >
                                <div className="dashboard-cell-title" >Your Listening Habits:</div>
                                <div className="dashboard-cell-content" >
                                    <div ref="user-graph" className="dashboard-cell-graph">
                                      <Chart height={300} width={getWindowDimensions().width - this.state.contentWidth - 300} />                                         
                                    </div>
                                </div>
                            </div>
                            <div className="content-grid-today-content-cell" >
                              <div className="dashboard-cell-title" >Todays Weather:</div>
                              <div className="dashboard-cell-content" >
                                <div className="testing-thing" >
                                  <div className="weather-circ">
                                    <div className="weather-circ-icon"><WeatherIcons.WiDaySunnyOvercast /></div>
                                    <div className="temp-circ">
                                      <div className="temp-circ-num"> { 84 }&#8457; </div>
                                    </div>
                                  </div>   
                                </div>
                              </div>
                            </div>
                        </div>
                        <div className="bottom-content-grid"> 
                            <div className="dashboard-bottom-cell-first" >
                              <div className="dashboard-cell-title" >Past 50 Spotify Songs:</div>
                              <div className="dashboard-cell-content" >
                                <div className="flex-row-wrapper">
                                  <div className="listened-to-content" >
                                      <div className="listened-to-content-box-right" >
                                          Country Songs
                                        <div className="listened-to-content-outer-diamond-right" >
                                           <div className="listened-to-content-inner-diamond-right" style={{ background: 'radial-gradient(#bbf5a1, #42dd69)' }} ><p>{27}</p></div>
                                        </div> 
                                      </div>
                                  </div>
                                  <div className="listened-to-content" >
                                     <div className="listened-to-content-box-left" >
                                          Rap Songs
                                        <div className="listened-to-content-outer-diamond-left" >
                                           <div className="listened-to-content-inner-diamond-left" style={{ background: 'radial-gradient(#99cadc, #3697e8)' }} ><p>{13}</p></div>
                                        </div> 
                                      </div>
                                  </div>
                                  <div className="listened-to-content" >
                                       <div className="listened-to-content-box-right" >
                                          R&B Songs
                                        <div className="listened-to-content-outer-diamond-right" >
                                           <div className="listened-to-content-inner-diamond-right" style={{ background: 'radial-gradient(#ca93ff, #9242dd)' }} ><p>{7}</p></div>
                                        </div> 
                                      </div>
                                  </div>
                                  <div className="listened-to-content" >
                                        <div className="listened-to-content-box-left" >
                                          Other Songs
                                        <div className="listened-to-content-outer-diamond-left" >
                                           <div className="listened-to-content-inner-diamond-left" style={{ background: 'radial-gradient(#f09090, #b23653)' }} ><p>{3}</p></div>
                                        </div> 
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-bottom-cell-second" >  
                              <div className="dashboard-cell-title" >Song of the Day:</div>
                              <div className="dashboard-cell-content" >
                                <div className="song-of-the-day-content-wrapper" >
                                  <div className="song-of-the-day-content-img-wrapper" >
                                    <div className="overflow-wrap" >
                                      <img alt="" src={songIMG} />
                                      <div className="song-of-the-day-content-title-box" >
                                        <div className="song-of-the-day-content-title" >Reggaetón lento</div>
                                        <div className="song-of-the-day-content-subtitle" >by CNCO and Little Mix</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>            
                            </div>
                            <div className="dashboard-bottom-cell-third" >
                              <div className="dashboard-cell-title" >Playlist of the Day:</div>
                              <div className="dashboard-cell-content" />   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper ">
                    © 2021 Tempoture v0.0.1 |  &nbsp; <AiOutlineGithub size={14} />  &nbsp; | An <div style={{color: '#fb4343'}}> &nbsp;RCOS&nbsp; </div> project
                </div>
            </div>
  }
}
export default Dashboard;