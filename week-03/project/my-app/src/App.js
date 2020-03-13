import React, { Component } from "react";
import Particles from "react-particles-js";
import ListTasks from "./components/ListTasks";
import AddTasks from "./components/AddTasks"
import Content from './components/Content'
import "./css/App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"



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
    tasks:[],
    urlList:[
      {
        aid:1,
        title:111
      },
    ]
  }

  ws = new WebSocket(URL)

  componentDidMount(){
    this.ws.onopen = () =>{
      console.log('connected');
    }
    this.ws.onmessage = (evt) => {
        this.scroll();
        const task = JSON.parse(evt.data)
        //this.changeTitle(update)
        if (typeof(task)==='object') {
          
          this.addTask(task)
          
         // this.inputName(task)
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

  


  scroll = () =>{
    let words = 'something new happen';
     setInterval(()=>{
      let start = words.substring(0,1);
      let end = words.substring(1);
      words = end + start;
      document.title = words;
    },400)
  }



  addTask = (task) =>{
    //console.log('task', index)
    this.setState(state =>({tasks: [task, ...state.tasks], user: this.state.user}))
  }


  submitTask = (aTask) =>{
    const task = {done: false, task: aTask, user: this.state.user }
    this.ws.send(JSON.stringify(task))
    this.addTask(task)
    console.log('submit', this.state)

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

  inputName = (e) =>{
    this.setState({
      user: e.target.value,
  });
  console.log('user:', this.state.user)

  }

  handleDone = (x) =>{
    let tasks = [...this.state.tasks]
    tasks[x.index].done = true
    this.setState({
      tasks: tasks
    })
    console.log('handledone:',this.state)
  }
  // createComponent = ()=>{
  //   let details = this.state.tasks;
  //   let date = '111';
  //   return <Content details={details} date={date}/>
  // }

  render() {
      return (
        <Router>
          <div className='App'>
          <Route path="/" >
            <Particles className="particles" params={particlesOptions} />
            <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.user}
            onChange={e => this.inputName(e)}
          />
            <AddTasks ws = {this.ws} onSubmitTasks={aTask=>this.submitTask(aTask)} />
           
                  <ul>
                  <label>
                  {
                      this.state.tasks.map((item, index) => {
                        return(
                        <li key={index}>
                      <ListTasks key={index} index={index} task={item.task} done={item.done}  user={item.user} handleDone={this.handleDone.bind(this)} delete={this.handleDeleteClick.bind(this)} /><Link to={`/content/${item.task}`}>Details</Link>
                      </li>
                      ) })
                  }
                  </label>
                  </ul>
                  </Route>
                  <Route path="/content/:task" component={Content}></Route>
                
              
          
            </div>
            </Router>
            


      );
  }
}


export default App;
