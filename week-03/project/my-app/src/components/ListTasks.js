import React, { Component } from "react";
import "../css/ListTasks.css";


class ListTasks extends Component {
  constructor(props){
    super(props);
    this.state = ({
      index: this.props.index
    })
  }

  
  doneTask =() =>{
    this.setState({ done: true });
  }




  handleDelete =() =>{
    this.props.delete(this.props.index);
  }



  render() {
    return (
      <div >
          <div className="content">

            {this.props.task}
          
          <button className="deleteBtn" onClick={this.handleDelete.bind(this)}>Delete</button>

          </div>
        </div>
    );
}

}
export default ListTasks;
