import React, {Component} from 'react';
import '../css/ListTasks.css'

class ListTasks extends Component{
  constructor(props){
    super(props)
    this.state = ({
      done:false
    })
  }
  handleDelete=()=>{
    this.props.delete(this.props.index)
  }

  handleDoneClick =()=>{
    this.setState({color: true})
  }


  render(){
    return (
      
      <div className={this.state.color?"Done":"notDone"}>
        <div className='content'>{this.props.content}</div>
        <button className='deleteBtn' onClick = {this.handleDelete.bind(this)}>Delete</button>
        <button className='doneBtn' onClick={this.handleDoneClick.bind(this)}>Done</button>
      </div>
    )
  }
}

export default ListTasks;