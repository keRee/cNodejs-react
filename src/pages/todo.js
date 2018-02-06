import React, { Component } from 'react'
//
// const TodoList = ({ score}) => (
//   <ul>
//     <li>
//       { score }
//     </li>
//   </ul>
// )

class TodoList extends Component {

  componentDidUpdate () {
    const id = this.props
    console.log(id)
  }

  render () {
    return (
      <div>
        1111
      </div>
    )
  }
}
export default TodoList
