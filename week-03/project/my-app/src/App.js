import React, { Component } from 'react';
import ListTasks from './components/ListTasks';
import '../src/css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      list: [],
      value: '',
      done:false
    })
  }

  handleAddClick=()=>{
    this.setState({
      list: [...this.state.list, this.state.value],
      value: ''
    })
  }

  handleInput = e =>{
    this.setState({
      value: e.target.value
    })
  }

  handleDeleteClick = (index) =>{
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }



  render(){
    return (
      <div>
        <input value={this.state.value} onChange = {this.handleInput.bind(this)} />
        <button onClick={this.handleAddClick.bind(this)}>Add</button>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return <ListTasks key={index} index={index} content={item} delete={this.handleDeleteClick.bind(this) }/>

                    
            })
          }
        </ul>
      </div>
    )
  }

}



export default App;
