import React, { Component } from 'react';
import ListTasks from './components/ListTasks';
import '../src/css/App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

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
      <div className='App'>
        <Particles className='particles' params={particlesOptions}/>
        <input className='search' placeholder="input task" value={this.state.value} onChange = {this.handleInput.bind(this)} />
        <input type ='submit'className='Add' onClick={this.handleAddClick.bind(this)} value='Add'/>
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
