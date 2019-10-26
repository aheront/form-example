import { connect } from 'react-redux'
import Component from './component'
import {removePost} from "../../actions/posts";

const mapStateToProps = ({ postsReducer: { posts } }) => ({
  posts
});

const mapDispatchToProps = (dispatch) => ({
  removePost: (index) => dispatch(removePost(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component)