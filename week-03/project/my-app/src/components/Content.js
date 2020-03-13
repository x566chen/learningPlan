import React, { Component } from "react";
import '../css/Content.css'


class Content extends Component {

  constructor(props){
    super(props);
    this.state = ({
      details: this.props.details,
      date: this.props.date
    })
  }

  render() {
    return (
      <div >
        <p>{this.props.details}11111111</p>
        </div>
    );
}

}
export default Content;
