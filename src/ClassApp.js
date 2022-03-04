import React, { Component } from 'react'

class ClassApp extends Component {
  state = {
    counter: 0,
    foods: ['Mie Goreng', 'Nasi Goreng']
  }

  componentDidMount() {
    console.log('Class Component did mount')
    // callAPI1()
    // callAPI2()
  }

  componentDidUpdate() {
    console.log('Component Class did update')
  }

  AddCounter = () => {
    this.setState({ counter: 12 })
  }

  AddFoods = () => {
    this.setState({ foods: ['Kwetiau'] })
  }

  render() {
    return (
      <div className="app class-app">
        <h1>Class Component</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Add Counter
        </button>
      </div>
    )
  }
}

export default ClassApp
