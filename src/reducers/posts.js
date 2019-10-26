import {ADD_POST, REMOVE_POST} from "../constants/posts";

const defaultState = {
  posts: []
};

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.post
        ]
      };
    case REMOVE_POST:
      state.posts.splice(action.index, 1);
      console.log(state.posts)
      return {
        ...state,
        posts: [...state.posts]
      };
    default:
      return state
  }
};

export default postsReducer;