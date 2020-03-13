import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/AddTasks.css'


let i = 0;
class AddTasks extends Component {
  constructor(props){
    super(props);
    this.state ={
      task: this.props.task,
      done: false,
      user: this.props.user
 
    }
  }
  static propTypes = {
    onSubmitTasks: PropTypes.func.isRequired,
  }
  state = {
    task: '',
    index: '',
    done: false
  }

  

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          i++;
          e.preventDefault()
          this.props.onSubmitTasks(this.state.task)
          this.setState({ task: '', index: i , done:false, user:this.props.user})
        }}
      >
        
        <input
          type="text"
          placeholder={'Enter task plz...'}
          value={this.state.task}
          onChange={e => this.setState({ task: e.target.value })}
        />
        <input className='add' type="submit" value={'Add'} />
      </form>
    )
  }
}

export default AddTasks