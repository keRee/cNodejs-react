function tabItemGroup (state = {
  isFirst: false,
  tab: '',
  page: 1,
  scrollTop: 0,
  items: []
}, action) {
  switch (action.type) {
    case 'RECEIVE_CNODE_DATA':
      // console.log(action.items)
      return Object.assign({}, state, {
        page: state.page + 1,
        tab: action.tab,
        items: [...state.items, ...action.items]
      })
    case 'RECEIVE_ITEM_INIT_FLAG':
      return Object.assign({}, state, {
        isFirst: true
      })
    case 'RECEIVE_SCROLL_TOP':
    return Object.assign({}, state, {
      scrollTop: action.scrollTop
    })
    default:
      return state
  }
}
export const store = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TAB':
      return Object.assign({}, state, {
        tab: action.tab
      })
    case 'RECEIVE_ARTICAL':
      return Object.assign({}, state, {
        artical: action.artical
      })
    case 'RECEIVE_CNODE_DATA':
      return Object.assign({}, state, {
        [action.tab]: tabItemGroup(state[action.tab], action)
      })
    case 'RECEIVE_ITEM_INIT_FLAG':
      return Object.assign({}, state, {
        [action.tab]: tabItemGroup(state[action.tab], action)
      })
    case 'RECEIVE_SCROLL_TOP':
      return Object.assign({}, state, {
        [action.tab]: tabItemGroup(state[action.tab], action)
      })
    default:
      return state
  }
}
