
import './App.css';

import React, { Component } from 'react'
import axios from "axios";

export default class App extends Component {
  state = { todos: []};

  async componentDidMount() {
  
  let  result = await axios.get("http://127.0.0.1:8000/cars/cars/");
  console.log("fetched the data from the json placeholder api wooray using axios")
  console.log(result);
  }
  render() {
    return (
      <div className="container">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        

         {this.state.todos.length > 0 ? (
           <div>{this.state.todos.length}</div>

         ) : (
          <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>

         )}
      </div>
    )
  }
}


