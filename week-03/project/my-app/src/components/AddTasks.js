import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/AddTasks.css'


let i = 0;
class AddTasks extends Component {
  static propTypes = {
    onSubmitTasks: PropTypes.func.isRequired,
  }
  state = {
    task: '',
    index: ''
  }

  

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          i++;
          e.preventDefault()
          this.props.onSubmitTasks(this.state.task)
          this.setState({ task: '', index: i })
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