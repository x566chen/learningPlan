import React, { Component } from "react";
import "../css/ListTasks.css";


class ListTasks extends Component {
  constructor(props){
    super(props);
    this.state = ({
      index: this.props.index,
      done: this.props.done,
      user: this.props.user
    })
  }

  
  doneTask =() =>{
    this.props.handleDone(this.props)
    console.log('list:',this.props)
 
  }


  

  handleDelete =() =>{
    this.props.delete(this.props.index);
    //console.log('list:',this.props)
  }



  render() {
    return (
      <div >
          <div className="content">

          <div id='p'> {this.props.task} </div> from  <div id='p'> {this.props.user}  {this.props.done}</div>
          
          <button className="Btn" onClick={this.handleDelete.bind(this)}>Delete</button>
          <button className="Btn" onClick={this.doneTask.bind(this)}>Done</button>
          </div>
        </div>
    );
}

}
export default ListTasks;
