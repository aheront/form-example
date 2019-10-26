import React  from 'react'
import PropTypes from 'proptypes'

const Post = ({ title, description, removePost }) => (
  <div>
    <button onClick={removePost}>
      Remove
    </button>
    <p>Title: {title}</p>
    <p>Description: {description}</p>
    <hr/>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default Post;