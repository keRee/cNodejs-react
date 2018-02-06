import React, { Component } from 'react';
import { debounce } from 'lodash'
// import Tbtn from './../pages/rtest'
// import { Link } from 'react-router'
import { tabChange, receiveTab, receiveScrollTop } from './../model/actions'
import News from './../components/News'
import Header from './../components/BoxHeader.js'
class Page extends Component {
  // constructor (props) {
  //   super(props)
  // }

  getMore = () => {
    let tab = this.props.params.tab || 'all'
    const { dispatch } = this.props
    const page = (this.props.store[tab] && this.props.store[tab]['page']) || 1
    // console.log(`%%%%~`, page)
    dispatch(tabChange(tab, page))
    // console.log('获取更多')
  }
  componentDidMount () {
    window.addEventListener('scroll', debounce(this.handleScroll, 200));
    let tab = this.props.params.tab || 'all'
    const { dispatch } = this.props
    if (!this.props.store[tab]) {
      dispatch(receiveTab(tab))
      dispatch(tabChange(tab))
    }
  }

  componentWillReceiveProps (nextProps) {
    let tab = nextProps.params.tab || 'all'
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const { dispatch } = this.props
      dispatch(receiveTab(tab))
      const isFirst = nextProps.store[tab] && nextProps.store[tab]['isFirst']
      const scrollTop = (nextProps.store[tab] && nextProps.store[tab]['scrollTop']) || 0
      setTimeout(()=>{
        // 放在延时定时器中，可消除scrollTop跳跃的bug（可能是因为render异步渲染更新导致的）
        // 使用定时器可使得scrollTop赋值在渲染之后
        document.documentElement.scrollTop = scrollTop
      }, 100)
      if (!isFirst) {
        dispatch(tabChange(tab))
      }
    }
  }

  componentWillUnmount () {
    // window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll = e => {
    let tab = this.props.params.tab || 'all'
    const scrollTop = document.documentElement.scrollTop
    const { dispatch } = this.props
    dispatch(receiveScrollTop(tab, scrollTop))
  }

  render () {
    // console.log(this.props)
    const { items } = this.props
    return (
      <div>
        <Header routeParms={this.props.params} />
        <News items={items} onMoreClick={ this.getMore } />
      </div>
    )
  }
}

export default Page;
