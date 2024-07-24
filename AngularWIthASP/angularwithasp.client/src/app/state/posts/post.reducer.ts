// post.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Post } from '../../models/as-is/post';
import {
  addPostSuccess,
  addPostError,
  loadPostsError,
  loadPostsSuccess,
  removePostError,
  removePostSuccess,
  addPost,
  removePost,
  loadPosts,
} from './post.actions';

export interface PostState {
  posts: Post[];
  error: string;
}

export const initialState: PostState = {
  posts: [],
  error: '',
};

export const postReducer = createReducer(
  initialState,
  on(addPost, (state) => ({
    ...state  })),
  on(removePost, (state) => ({
    ...state  })),
  on(loadPosts, (state) => ({
    ...state  })),
  on(addPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
  })),
  on(addPostError, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(removePostSuccess, (state, { id }) => ({
    ...state,
    posts: state.posts.filter((p) => p.id !== id),
  })),
  on(removePostError, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(loadPostsError, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
