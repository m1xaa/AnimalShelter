import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { PostService } from "../../services/post.service";
import { addPost, addPostError, addPostSuccess, loadPosts, loadPostsError, loadPostsSuccess, removePost, removePostSuccess } from "./post.actions";
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";


@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private postService: PostService
    )
    {
    }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadPosts),
          switchMap(() =>
            from(this.postService.getAll()).pipe(
              map((posts) => loadPostsSuccess({ posts: posts })),
              catchError((error) => of(loadPostsError({ error })))
            )
          )
        )
      );

    addPosts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(addPost),
            switchMap(action => 
                from(this.postService.create(action.request)).pipe(
                  map((post) => addPostSuccess({ post: post})),
                  catchError((error) => of(addPostError({ error })))
                )
            )
        )
    )

    removePost$ = createEffect(() =>
      this.actions$.pipe(
        ofType(removePost),
        switchMap(action => 
            from(this.postService.delete(action.id)).pipe(
              map(() => removePostSuccess({ id: action.id})),
              catchError((error) => of(addPostError({ error })))
            )
        )
    )
    )
}