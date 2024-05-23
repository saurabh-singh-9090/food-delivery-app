import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
                <h1>About Page (Class Based Component)</h1>
                {/* Using context API data in class based component */}
            <UserContext.Consumer>
                {({loggedInUser}) => (
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
                <User name="Saurabh Singh(Functional based)" location={"Bangalore"}/>
                <UserClass name="Saurabh Singh(class based)" location={"Bangalore"}/>
            </div></>
        )
    }
}

export default About;