import React, { Component } from 'react'
import { Link } from 'react-router'


class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: []
    }
  }

  componentDidMount () {
    let tab = this.props.routeParms.tab || 'all'
    // console.log(this.props.routeParms.id, tab)
    this.setState({tab: tab})
  }

  componentWillReceiveProps (nextProps) {
    let tab = nextProps.routeParms.tab || 'all'
    // console.log(nextProps.routeParms.id, tab)
    this.setState({tab: tab})
  }

  render () {
    const data = [
      {path: 'all', title: "全部"},
      {path: 'good', title: "精华"},
      {path: 'share', title: "分享"},
      {path: 'ask', title: "问答"},
      {path: 'job', title: "招聘"}
    ]
    const tabs = data.map( (item, index) => {
      return (
        // 遍历要加key
        <li key={index} className={this.state.tab === item.path ? 'active-tab' : ''}>
          <Link to={`/pages/${item.path}`}>{ item.title }</Link>
        </li>
      )
    })
    return (
      <div className="IndexTab">
        <ul className="tabs">
          {tabs}
        </ul>
      </div>
    )
  }
}

export default Header;
