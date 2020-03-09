import React, { Component } from "react";
import Particles from "react-particles-js";
import ListTasks from "./components/ListTasks";
import io from "socket.io-client";

import "./css/App.css";
const mysql = require('mysql');
const socket = io('ws://localhost:3000/');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1122Cx1994@',
  database: 'test',
});


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



class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            personName: '',
            list: [],
            value: "",
        });
    }



  initSocket () {
    socket.on('enter', (data) => {      
      this.showMessage(data, "enter")
    });
    socket.on('message', (data) => {  
      this.showMessage(data, "message")
    });
    socket.on('addClick', (data) => {   
      // this.setState({
      //   list: [...this.state.list, this.state.value],
      //   value: "",
      // })
      let add = `INSERT INTO todoList (name) VALUES ( "${data}")`;
      connection.query(add,(err, result)=>{
        if (err){
          console.log('ERROR')
        }else{
          console.log(data)
        }
      } )
    });
    socket.on('doneClick', (data) => {   
      this.showMessage(data, "doneClick")
    });
    socket.on('deleteClick', (data) => {   
      this.showMessage(data, "deleteClick")
    });
    socket.on('leave', (data) => {        
      this.showMessage(data, "leave")
    });
    socket.on('enterSelf', (data) => {   
      this.setState({personName: data.name})
    });
  
  }

  handleAddClick=() => {
      socket.emit('addClick', this.state.value)
      this.setState({
          list: [...this.state.list, this.state.value],
          value: "",
      });
      
  }

  handleInput = (e) => {
      socket.emit('message', e.target.value)
      this.setState({
          value: e.target.value,
      });
  }

  handleDeleteClick = (index) => {
      const list = [...this.state.list];
      list.splice(index, 1);
      this.setState({
          list,
      });
  }


  render() {
      return (
        <div className="App">
            <Particles className="particles" params={particlesOptions} />
            <input className="search" placeholder="input task" value={this.state.value} onChange={this.handleInput.bind(this)} />
            <input type="submit" className="Add" onClick={this.handleAddClick.bind(this)} value="Add" />
            <ul>
                {
                      this.state.list.map((item, index) => <ListTasks key={index} index={index} content={item} delete={this.handleDeleteClick.bind(this)} />)
                  }
              </ul>
          </div>
      );
  }
}


export default App;
