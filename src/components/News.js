import React, { Component } from 'react'
import { Link } from 'react-router'
import './../assets/newsList.scss'
class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: []
    }
  }

  componentDidMount () {
    this.setState({datas: this.props.items})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({datas: nextProps.items})
  }

  render () {
    function Avatar(props) {
      let tab = props.value.value.tab
      if(tab){
        let tabs = {
          'top': '置顶',
          'share': '分享',
          'good': '精华',
          'ask': '问答',
          'job': '招聘'
        }
        // 精华
        if(props.value.value.good){
          tab = 'good'
        }
        // 置顶
        if(props.value.value.top){
          tab = 'top'
        }
        return (
          <div className={"items artical-type"}>
            <span className={"tab " + tab + "-tab"}>{ tabs[tab] }</span>
          </div>
        )
      }else{
        return ''
      }

    }
    function ListItem(props) {
      // console.log('***', props)
      // 对啦！这里不需要指定key:
      return (
        <li className="item">
          <div className="items avatar"><img src={props.value.author.avatar_url} alt="" /></div>
          <Avatar value={props} />
          <div className="items title">
            <Link to={"/artical/" + props.value.id}>{ props.value.title }</Link>
          </div>
        </li>
      );
    }

    function ItemList(props) {
      const items = props.items;
      if ({}.toString.call(items) === '[object Array]') {
        const listItems = items.map((items) =>
          // 又对啦！key应该在数组的上下文中被指定
          <ListItem key={Math.random() * new Date()}
                    value={items} />
        );
        return (
          <ul className="news-list">
            {listItems}
          </ul>
        );
      } else {
        return <p style={{textAlign: 'center'}}>加载中...</p>
      }
    }
    return (
      <div className="news-content">
        <ItemList items={ this.state.datas } />
        <p className="more" onClick={ this.props.onMoreClick }>点击加载更多...</p>
      </div>
    )
  }
}

export default News
