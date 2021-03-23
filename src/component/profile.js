
import webb from "./web.jpg";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";
import PropTypes from "prop-types";
import React, { Component } from 'react';

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0};
    }

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ ...this.state, counter: this.state.counter + 1 });
    }, 1000);
  }
  render() {
    
const stylename={ color:"#8d108d",fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "x-large",fontWeight:700}
const styleprofession={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "large",fontWeight:700}
const stylebio={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "small",fontWeight:400,textAlign:"center"}
    return (
    <div>
    <div className="img_container">
      <div className="img_profile">
        {this.props.children}
      </div>
    </div>
    <div className="name_container">
      <h1 style={stylename}>{this.props.fullName}</h1>
      <h3 style={styleprofession}>{this.props.profession}</h3>
      <p style={stylebio}>{this.props.bio}</p>
    </div>
    <h6> {this.state.counter}</h6>
  </div>
    );
  }
}

export default profile;



// define PropsType to props. 
profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  
};
//Define default props for Profile component.
profile.defaultProps = {
  fullName: "fullname",
  profession: "profession",
  bio: "bibiogaphie",
  }


