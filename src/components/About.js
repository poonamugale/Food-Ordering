import User from "./User";
import UserClass from "./userClass";
import React from "react";

class About extends React.Component {
  constructor(probs) {
    super(probs);

    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This the Food Ordering App</h2>
        {/* <User name={"Poonam Bochare"} /> */}
        <UserClass name={"Poonam Bochare (Class)"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
