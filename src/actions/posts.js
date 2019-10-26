import { ADD_POST, REMOVE_POST } from "../constants/posts";

export const addPost = (post) => ({
  type: ADD_POST,
  post
});

export const removePost = (index) => ({
  type: REMOVE_POST,
  index
});