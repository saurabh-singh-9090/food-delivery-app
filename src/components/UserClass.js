import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //This is mandatory for class based components
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
    // console.log("Child Constructor")
  }

  async componentDidMount() {
    // console.log("Child ComponentDidMount")
    const data = await fetch("https://api.github.com/users/saurabh-singh-9090");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(()=>{
        console.log("HELLO REACT")
    },100);
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate called")
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnmount")
  }

  render() {
    //   console.log("Child Render")
    //   const {name, location} = this.props;
    const {
      count,
      userInfo: { name, location },
    } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            //Here,only count variable will be updated and rest other state variable will remain same
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @saurabhsinghkumar</h4>
      </div>
    );
  }
}

export default UserClass;
