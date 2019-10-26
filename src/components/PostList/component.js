import React, { Fragment } from 'react'
import Post from '../Post/component'
import PropTypes from 'proptypes'

const PostList = ({ posts, removePost }) => (
  <Fragment>
    { posts.map((post, index) => <Post key={index} {...post} removePost={() => removePost(index) }/> )}
  </Fragment>
);

PostList.defaultProps = {
  posts: []
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  removePost: PropTypes.func.isRequired
};

export default PostList;