import React from "react";
// import {Component} from "react";
import { Outlet } from "react-router-dom";

import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor(props){
        super(props);  // research topic
        // console.log("parent-constructor")
    }
    componentDidMount(){
        // best place to make an api call
        // this will be called after render 
        // console.log("parent-componentDidMount");
    }
    render() {
        // console.log("parent-render");
        return (
            <>
                <div>
                    <h4>About Us Page</h4>

                    <UserContext.Consumer>
                        {({user})=>(
                            <h4 className="font-bold text-xl p-10">
                                {user.name} - {user.email}
                            </h4>
                        )}
                    </UserContext.Consumer>
                    <p>
                        Learning React-routing...
                    </p>
                </div>
                {/* < Outlet /> */}
                {/* <Profile name={"Ashish"} /> */}
                <ProfileClass name={"First Child"} xyz={"abc"} />
            </>
        );
    }
}

export default About;




/**
 * 
 * Parent Constructor
 * Parent Render
 *      First Child - Constructor
 *      First Child - Render
 *      Second Child - Constructor
 *      Second Child - Render
 * 
 *      DOM UPDATED for children
 * 
 *      First Child - componentDidMount
 *      Second Child - componentDidMount
 * Parent - componentDidMount
 * 
 * 
 */