import React from "react";
// import {Component} from "react";
import { Outlet } from "react-router-dom";

import ProfileClass from "./ProfileClass";
import Profile from "./Profile";


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
                    <h1>About Us Page</h1>
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