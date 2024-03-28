import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log('Parent Constructor called');
    }

    componentDidMount(){
        console.log('Parent componentDidMount');
    }

    render(){
        console.log('Parent Render called');
        return(
            <div>
                <h1>About Us</h1>
                <UserClass name={"First class"} position={"Mern Stack Developer"}/>
            </div>
        )
    }
}

export default About;