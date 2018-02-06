import axios from 'axios'
export const receiveTab = tab => ({
  type: 'RECEIVE_TAB',
  tab
})
export const receiveArtical = artical => ({
  type: 'RECEIVE_ARTICAL',
  artical
})
export const receiveScrollTop = (tab, scrollTop) => ({
  type: 'RECEIVE_SCROLL_TOP',
  scrollTop,
  tab
})
const receiveTabFirstFetch = tab => ({
  type: 'RECEIVE_ITEM_INIT_FLAG',
  tab
})
export const getCnodeData = (tab, items) => ({
  type: 'RECEIVE_CNODE_DATA',
  tab,
  items,
  receiveAt: Date.now()
})
const fetchData = (tab, page) => dispatch => {
  // dispatch(receiveTab(tab))
  axios.get('https://cnodejs.org/api/v1/topics', {
    params: {
      tab,
      limit: 30,
      page
    }
  }).then(res => {
    dispatch(getCnodeData(tab, res.data.data))
    dispatch(receiveTabFirstFetch(tab))
  })
}

const fetchArtical = id => dispatch => {
  axios.get('https://cnodejs.org/api/v1/topic/' + id, {
    params: {
      // mdrender: true,   // default: true
      // accesstoken: ''
    }
  }).then(res => {
    // console.log(res)
    dispatch(receiveArtical(res.data.data))
  })
}
export const tabChange = (tab, page = 1) => (dispatch, getState) => {
  return dispatch(fetchData(tab, page))
}

export const getArtical = id => (dispatch, getState) => {
  return dispatch(fetchArtical(id))
}
