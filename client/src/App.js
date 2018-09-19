import React, { Component } from 'react';
import Axios from 'axios';

import './App.css';
import TheNav from './components/nav';
import Tasks from './components/tasks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      theTasks: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    Axios.get('/api/to-do')
      // .then(response => console.log(JSON.stringify(response.data)))
      .then(response => this.setState({theTasks: JSON.stringify(response.data)}))
  };
  state = {
    response: '',
    
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res.express 
      }))
      .catch(err => console.log(err)); 
  }
  callApi = async() => {
    const response = await fetch('/api/to-do');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  render() {
    const theTitle = 'Taskr';
    // const theTasks = this.state.theTasks;
    return (
      <div className="App" >
        <TheNav 
          theTitle = {theTitle}
        />
        <p className="App-intro">{this.state.response}</p>
        <Tasks />
      </div>
    );
  }
}

export default App;
