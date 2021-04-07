
import React, { Component, createContext } from "react";
import { update_location } from "./../Pages/PageFunctions/UserRestricted"
import { getAddress } from "./../Pages/PageFunctions/getUserData"
export const LocationContext = createContext({ access_token: null, user_id: null });

class Location extends Component {
    state = {
        access_token: null,
        user_id: null,
    };

    componentDidMount = () => {
        window.addEventListener("storage", e => {
            let c_access_token = localStorage.getItem('access_token');
            let c_id = localStorage.getItem('user_id');
            this.setState({
                access_token: c_access_token,
                user_id: c_id
            });
        });
        let access_token = localStorage.getItem('access_token');
        if (access_token != null && access_token !== 'undefined') {
            if ("geolocation" in navigator) {
                // check if geolocation is supported/enabled on current browser
                navigator.geolocation.getCurrentPosition(
                    function success(position) {
                        getAddress(position.coords.latitude, position.coords.longitude).then((adress) => {
                            if (adress !== undefined && adress.length > 1 && adress !== '') // This is just in case your missing the env KEY, or you can't (for whatever reason), get the adress from LONG/LAT(Not regarding getting the actual coordinates)
                            {
                                var id = localStorage.getItem('user_id');
                                update_location(id, adress[1], adress[0]);
                            }
                        })
                    },
                    function error(error_message) {
                        // for when getting location results in an error
                        console.error('An error has occured while retrieving location', error_message)
                    }
                );
            } else {
                // geolocation is not supported
                // get your location some other way
                console.log('geolocation is not enabled on this browser')
            }
        }

    }

    render() {
        return (
            <LocationContext.Provider value={this.state.user_id}>
                {this.props.children}
            </LocationContext.Provider>
        );
    }
}
export default Location;