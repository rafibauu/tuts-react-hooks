import React, { Component } from 'react'
import { UserContext } from '../App'

class Dashboard extends Component {
  static contextType = UserContext;

  render() {
    console.log('Dashboard', this.context)
    return (
      <div>
        Dashboard
        <UserContext.Consumer>
          {(values) => {
            return (
              <h1>
                ID: {values.id}
                <br />
                Name: {values.name}
                <br />
                Email: {values.email}
                <br />
              </h1>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

export default Dashboard
