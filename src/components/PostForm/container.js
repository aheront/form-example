import { connect } from 'react-redux'
import Component from './component'
import { addPost } from '../../actions/posts'

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post))
});

export default connect(null, mapDispatchToProps)(Component)