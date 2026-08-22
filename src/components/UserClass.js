import React from "react";

class UserClass extends React.Component {

    // constructor is a special method that is called when an instance of the class is created. It is used to initialize the state and bind methods to the class instance.
    constructor(props){
        super(props);

        this.state = {
            // count: 0,
            // // count2: 2,
            userInfo: {
                login : "Failed",
                avatar_url : "DUMMY"
            }
        }
    }

    // We can make this async
    async componentDidMount(){
        // console.log("Componet did mount called");
        const data = await fetch("https://api.github.com/users/Anurag8259");
        const json = await data.json(); // use wait here as it will return a promise. We need to wait for the promise to resolve before we can use the data.
        console.log(json);
        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate(){
        console.log("Component did update called");
    }

    // Called when this componet is gone from the DOM. This is used to clean up any resources that were created in componentDidMount. For example, if we have a timer or an event listener, we need to remove it when the component is unmounted.
    componetWillUnmount(){
        console.log("Component will unmount called");
    }

    //render method is the only required method in a class component. It is responsible for rendering the UI of the component.
    render(){
        const {login} = this.state.userInfo;
        // console.log("Here : " + {location});
        return (
            <div className = "user">
                <img src={this.state.userInfo.avatar_url} alt={login} />
                <h1>{login}</h1>
                {/* <h2>{location}</h2> */}
                <h2>1217387273   abc@gmail.com</h2>
            </div>
        );
    }
}
export default UserClass;