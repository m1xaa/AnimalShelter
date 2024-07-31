import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { ReviewService } from "../../services/review.service"
import { addReview, addReviewError, addReviewSuccess, loadReviews, loadReviewsError, loadReviewsSuccess, removeReview, removeReviewError, removeReviewSuccess } from "./review.actions"
import { catchError, from, map, of, switchMap } from "rxjs";
import { addPostError, removePostSuccess } from "../posts/post.actions";


@Injectable()
export class ReviewEffects {
    constructor(
        private actions$: Actions,
        private reviewService: ReviewService
      ) {}

    loadReviews$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadReviews),
            switchMap(action =>
                from(this.reviewService.getAll(action.postId)).pipe(
                    map((reviews) => loadReviewsSuccess({reviews: reviews})),
                    catchError((error) => of(loadReviewsError({error: error})))
                )
            )
        )
    );

    addReview$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addReview),
            switchMap(action => 
                from(this.reviewService.create(action.request, action.postId)).pipe(
                    map((review) => addReviewSuccess({review: review})),
                    catchError((error) => of(addReviewError({error: error})))
                )
            )
        )
    )

    removeReview$ = createEffect(() =>
        this.actions$.pipe(
          ofType(removeReview),
          switchMap(action => 
              from(this.reviewService.delete(action.postId, action.reviewId)).pipe(
                map(() => removeReviewSuccess({postId: action.postId, reviewId: action.reviewId})),
                catchError((error) => of(removeReviewError({ error })))
              )
          )
        )
      )
}