import { useEffect, useState } from "react";

const Profile = ({name}) =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        // API call
        //
        const timer = setInterval(()=>{
            console.log("Problem in SPA.")
        },1000);

        console.log("useEffect");

        // to unmount the component
        return ()=>{
            clearInterval(timer);
            console.log("useEffect Return");
        }

    });
    console.log("render");
    /**
     * 
     * render
     * useEffect
     * useEffect
     * 
     */
    return (
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>
                UpdateCount
            </button>
        </div>
    )
}

export default Profile;