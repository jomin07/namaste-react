import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy name",
                location: "default"
            }
        }
        console.log(this.props.name + ' Constructor called');
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");

        const json = await data.json();
        
        console.log('Component Did Mount is called');

        this.setState({
            userInfo:json
        })

        console.log(json);
    }

    componentDidUpdate(){
        console.log('Component Did Update is called');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount is called');
    }

    render(){
        console.log(this.props.name + ' Child Render called');
        const {name, website} = this.state.userInfo;
        return(
            <div>
                <h1>Name: {name}</h1>
                <h3>Website: {website}</h3>
            </div>
        )
    }
}
export default UserClass;