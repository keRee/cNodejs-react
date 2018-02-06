import { connect } from 'react-redux'
import Page from '../../layout/Page'

const cnodeData = (state) => {
  const { store } = state
  const tab = store['tab'] || 'all'
  // console.log(`cur tab:`, tab)
  const items = (store[tab] && store[tab]['items']) || []
  const isFirst = (store[tab] && store[tab]['isFirst']) || false
  // console.log(`${tab}-isFirst:`, isFirst)
  return {
    store,
    items,
    tab,
    isFirst
  }
}

export default connect(cnodeData)(Page)
