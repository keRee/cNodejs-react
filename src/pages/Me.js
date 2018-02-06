import React, { Component } from 'react'
import Mock from 'mockjs'

class Me extends Component {
  constructor () {
    super()
    this.state = {
      'data': [],
      'num': 10,
      'time': 0,
      'key': ''
    }
    this.test = this.test.bind(this)
    this.filter1 = this.filter1.bind(this)
    this.change = this.change.bind(this)
  }

  change (e) {
    this.setState({'key': e.target.value})
  }

  test () {
    let res = Mock.mock({
      'data|100000': [
        {'value': '@name', 'key': '@cname', 'min|1-100': 0 }
      ]
    })
    this.setState({'data': res.data})
    // setState是异步的
    setTimeout(()=>{
      console.log(this.state.data)
    }, 0)
  }

  filter1 () {
    let str = this.state.key
    let data = this.state.data
    console.log(data)
    console.time('filter')
    let st = new Date()
    var res = data.filter(item => item.value.toLowerCase().indexOf(str) >= 0 )
    let et = new Date()
    let t = et - st
    console.log('t', t)
    this.setState({'time': t})
    console.timeEnd('filter')
    console.log(res)
  }

  render () {
    return (
      <div>
        <p>its pages Me</p>
        <p>{this.state.time}</p>
        <div>
          <button onClick={this.test}>start</button>
        </div>
        <div>
          <input value={this.state.key} onChange={this.change}/>
          <span>当前：{this.state.key}</span>
        </div>
        <div>
          <button onClick={this.filter1}>filter</button>
        </div>
        {/* 子路由视图 */}
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Me;
