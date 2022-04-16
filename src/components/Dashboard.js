import React, { Component } from 'react'
import { UserContext } from '../App'

class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    const values = this.context
    console.log('Dashboard', values)
    return (
      <div>
        Dashboard
        <h1>
          ID: {values.id}
          <br />
          Name: {values.name}
          <br />
          Email: {values.email}
          <br />
        </h1>
      </div>
    )
  }
}

export default Dashboard
