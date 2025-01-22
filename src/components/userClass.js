import React from "react";

class UserClass extends React.Component {
  constructor(probs) {
    super(probs);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dafault",
        avtar_url: "htp://dummay-photo.com",
      },
    };
    // console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/poonamugale");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src="avtar_url" />
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact:poonamugale1997@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
