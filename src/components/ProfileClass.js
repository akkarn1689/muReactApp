import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props); // research topics
        this.state = {
            userInfo:{
                name: "Dummy Name",
                location: "Dummy Location",

            },
        };
        console.log("child-constructor "+this.props.name);
    }

    // research about when and why should we use async for componentDidMount
    componentDidMount(){
        // this will be called after render
        // console.log("child-componentDidMount1 "+this.props.name);
        // //API call
        // const data = await fetch("https://api.github.com/users/akkarn1689");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo: json,
        // })
        
        // to see why do we need to unmount things
        // this.timer = setInterval(()=>{
        //     console.log("Problem in SPA.")
        // },1000);


        console.log("child-componentDidMount "+this.props.name);
    }

    componentDidUpdate(){
        // this will be called after every re-render
        // if there is a need to keep dependencies, we have to put if-else condition inside 'componentDidUpdate'
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        // this will be called when we go to any other page
        clearInterval(this.timer);

        console.log("Component Will Unmount");
    }

    render() {
        console.log("child-render "+this.props.name);
        return (
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name: {this?.state?.userInfo?.name}</h3>
                <h3>Location: {this?.state?.userInfo?.location}</h3>
                
            </div>
        )
    }
}


/**
 * 
 * child- constructor
 * child-render
 * child-componentDidMount1
 * API call
 * setState
 * child-componentDidMount
 * child-render <UPDATE CYCLE>
 * componentDidUpdate
 * 
 */




export default Profile;



/**
 * 
 * parent-constructor
 * parent-render
 * child-constructor First Child
 * child-render First Child
 * child-componentDidMount1 First Child
 * parent-componentDidMount
 * API call
 * child-componentDidMount First Child
 * child-render First Child
 * 
 * 
*/