import { createAction, props } from "@ngrx/store";
import { CreatePostRequest } from "../../models/post/create-post-request";
import { Post } from "../../models/as-is/post";

export const addPost = createAction(
    '[Post Page] Add Post',
    props<{request: CreatePostRequest}>()
);

export const addPostSuccess = createAction(
    '[Post Page] Add Post Success',
    props<{post: Post}>()
);

export const addPostError = createAction(
    '[Post Page] Add Post Error',
    props<{error: string}>() 
);

export const removePost = createAction(
    '[Post Page] Remove Post',
    props<{id: string}>()
);

export const removePostSuccess = createAction(
    '[Post Page] Remove Post Success',
    props<{id: string}>()
);

export const removePostError = createAction(
    '[Post Page] Remove Post Error',
    props<{error: string}>() 
);


export const loadPosts = createAction('[Post Page] Load Todos');

export const loadPostsSuccess = createAction(
    '[Post Page] Load Posts Success',
    props<{posts: Post[]}>()
);

export const loadPostsError = createAction(
    '[Post Page] Load Posts Error',
    props<{error: string}>() 
);