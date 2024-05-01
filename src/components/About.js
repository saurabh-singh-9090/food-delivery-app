import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent ComponentDidMount")
    }

    render(){
        // console.log("Parent Render")
        return (
            <>
            <div>
                <h1>About Page</h1>
                <User name="Saurabh Singh(Functional based)" location={"Bangalore"}/>
                <UserClass name="Saurabh Singh(class based)" location={"Bangalore"}/>
            </div></>
        )
    }
}

export default About;