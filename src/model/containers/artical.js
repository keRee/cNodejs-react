import { connect } from 'react-redux'
import Artical from '../../layout/Artical'

const cnodeData = (state) => {
  const { store } = state
  const artical = store['artical'] || '<p>文章被小怪兽吃掉了~~</p>'
  return {
    store,
    artical
  }
}

export default connect(cnodeData)(Artical)
