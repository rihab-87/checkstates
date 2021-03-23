import "./App.css";
import React, { Component } from "react";
import Profile from "./component/profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import imgprofile from "./component/imgprofile.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      person: {
        fullName: "Meagan FISHER",
        bio:"Meagan FISHER is a web designer ,product designer, front-end developer,speaker,and writer.She's known for her love of owls, but is also crasy about typographiy,cats,coffe,and pastel rainbows.",
        profession: "Web developer fullstack JS",
      },
    };
  }
  handlprofil = () => {
    this.setState({ show: !this.state.show });
  }; 
  render() {
    return (
      <div className="App">
        <div className="profile">
          {this.state.show ? (<Profile fullName={this.state.person.fullName} profession={this.state.person.profession} bio={this.state.person.bio}>
              <img src={imgprofile} alt="webpage" />
              </Profile>) : null}
          <Button variant="secondary" onClick={this.handlprofil}>
            {" "}
            {this.state.show?(<span>Hidden profile</span>):(<span>View profile</span>
            )}
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
