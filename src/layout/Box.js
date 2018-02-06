import React, { Component } from 'react';
// import Header from './../components/BoxHeader.js'
import './../assets/box.scss'
class Box extends Component {
  render () {
    return (
      <div className="box-content">
        { this.props.children }
      </div>
    )
  }
}

export default Box;
