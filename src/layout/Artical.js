import React, { Component } from 'react'
import { getArtical } from '../model/actions/index'

import '../assets/github-markdown.css'
class Artical extends Component{
  componentDidMount () {
    const { dispatch } = this.props
    const { id } = this.props.params
    dispatch(getArtical(id))
  }

  componentDidUpdate () {

  }

  componentWillUnmount () {
    // setTimeout(()=>{
      // document.documentElement.scrollTop = 0
    // }, 600)
  }

  render () {
    function renderHtml(html) {
      return {__html: html};
    }
    // console.log(this.props)
    const { content, author } = this.props.artical

    function ArticalTitle (props) {
      const { data } = props
      let tab = data.tab
      const tabs = {
        'top': '置顶',
        'share': '分享',
        'good': '精华',
        'ask': '问答',
        'job': '招聘'
      }
      // 精华
      if(data.good){
        tab = 'good'
      }
      // 置顶
      if(data.top){
        tab = 'top'
      }
      return (
        <div className="artical-head artical-type">
          <div>
            <span className={"tab " + tab + "-tab"} >{ tabs[tab] }</span>
            <span className="title">{ data.title }</span>
          </div>
          <div className="author-info">
            <div className="lr-flex">
              <p className="lr-flex-item l-item" >作者: { author && author['loginname'] }</p>
              <p className="lr-flex-item r-item" >发表于{ new Date(data.create_at).toLocaleString() }</p>
            </div>
            <div className="lr-flex">
              <p className="lr-flex-item l-item" >回复: { data.reply_count }</p>
              <p className="lr-flex-item r-item" >阅读: { data.visit_count }</p>
            </div>
          </div>
        </div>
      )
    }
    function ArticalComments (props) {
      const { data } = props
      let { replies } = data
      // console.log(replies)
      replies = replies || []
      let items = replies.map((item, index) => {
        return (
          <li key={item.id}>
            <p dangerouslySetInnerHTML={renderHtml(item.content)}></p>
            <div className="lr-flex font10 color-gray">
              <p className="lr-flex-item l-item" >{ item.author.loginname }</p>
              <p className="lr-flex-item r-item" >{ new Date(item.create_at).toLocaleString() }</p>
            </div>
            <p className="comments-index color-gray font10">{ index + 1}#</p>
          </li>
        )
      })
      return (
        <div>
          <p className="comments-title color-gray">{replies.length}回复</p>
          <ul>{ items }</ul>
        </div>
      )
    }
    return (
      <div className="artical">
        <div>
          <ArticalTitle data={ this.props.artical } />
        </div>
        <div className="markdown-body">
          <div className="artical-content">
            <div dangerouslySetInnerHTML={renderHtml(content)} ></div>
          </div>
          <div className="comments">
            { this.props.artical  && <ArticalComments data={ this.props.artical } />}
          </div>
        </div>
      </div>
    )
  }
}

export default Artical
