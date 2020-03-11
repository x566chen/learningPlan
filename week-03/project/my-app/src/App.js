import React, { Component } from "react";
import Particles from "react-particles-js";
import ListTasks from "./components/ListTasks";
import AddTasks from "./components/AddTasks"

import "./css/App.css";



const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800,
            },
        },
    },
};

const URL = 'ws://localhost:3030'

class App extends Component {
  state = {
    done: false,
    tasks:[],
    index:''
  }

  ws = new WebSocket(URL)

  componentDidMount(){
    this.ws.onopen = () =>{
      console.log('connected');
    }
    this.ws.onmessage = (evt) => {

        const task = JSON.parse(evt.data)
        if (typeof(task)==='object') {
          this.addTask(task)
        }
        if (typeof(task)==='number') {
          this.deleteTask(task)
        }
      }
    

    this.ws.onclose = () => {
      console.log('disconnected')
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }

  addTask = (task, index) =>{
    //console.log('task', index)
    this.setState(state =>({tasks: [task, ...state.tasks], done: false}))
  }




  submitTask = (aTask) =>{
    const task = {done: false, task: aTask }
    this.ws.send(JSON.stringify(task))
    this.addTask(task)

  }

  deleteTask = index => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
        tasks,
    });
  }

  handleDeleteClick = (index) => {
    this.ws.send(JSON.stringify(index));
    this.deleteTask(index);
}
  handleInput = (e) => {
      this.setState({
          value: e.target.value,
      });
  }





  render() {
      return (
        
          <div className='App'>
            <Particles className="particles" params={particlesOptions} />
            
            <AddTasks ws = {this.ws} onSubmitTasks={aTask=>this.submitTask(aTask)} />
            
            <ul>
                <label>
                  {
                      this.state.tasks.map((item, index) => <ListTasks key={index} index={index} task={item.task} delete={this.handleDeleteClick.bind(this)} />)
                  }
                </label>
              </ul>
            </div>


      );
  }
}


export default App;
