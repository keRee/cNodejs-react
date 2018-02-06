import React, { Component } from 'react'

class Error extends Component{

  componentDidMount() {
    // const id = this.props.location
  }

  render () {
    return (
      <div>
        <p>code 404</p>
        <p><code>{this.props.location.pathname}</code></p>
      </div>
    )
  }
}

export default Error;
