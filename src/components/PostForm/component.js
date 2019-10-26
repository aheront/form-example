import React, {Component, Fragment} from 'react'
import PropTypes from 'proptypes'

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  submitForm() {
    const { title, description } = this.state;
    const { addPost } = this.props;

    addPost({ title, description });
    this.setState({
      title: '',
      description: '',
    })
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { title, description } = this.state;

    return (
      <Fragment>
        <input name="title" value={title} onChange={this.onChange} />
        <input name="description" value={description} onChange={this.onChange} />
        <button onClick={this.submitForm}>
          Submit
        </button>
      </Fragment>
    )
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default PostForm;