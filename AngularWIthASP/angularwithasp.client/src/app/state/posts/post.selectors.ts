import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PostState } from "./post.reducer";


export const selectPosts = (state: AppState) => state.posts;

export const selectAllPosts = createSelector(
  selectPosts,
  (state: PostState) => state.posts
);