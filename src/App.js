import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import ContactsList from './ContactsList'
import Timer from './Timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Contactz!</h2>
        </div>
        <Timer />
        <ContactsList />
      </div>
    )
  }
}

export default App
