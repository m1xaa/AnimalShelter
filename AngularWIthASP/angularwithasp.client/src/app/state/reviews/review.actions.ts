import { createAction, props } from "@ngrx/store";
import { CreateReviewRequest } from "../../models/review/create-review-request";
import { Review } from "../../models/as-is/review";

export const addReview = createAction(
    '[Review Page] Add Review',
    props<{
        request: CreateReviewRequest,
        postId: string
    }>()
);

export const addReviewSuccess = createAction(
    '[Review Page] Add Review Success',
    props<{review: Review}>()
);

export const addReviewError = createAction(
    '[Review Page] Add Review Error',
    props<{error: string}>()
);

export const removeReview = createAction(
    '[Review Page] Remove Review',
    props<{
        postId: string,
        reviewId: string
    }>()
);

export const removeReviewSuccess = createAction(
    '[Review Page] Remove Review Success',
    props<{
        postId: string,
        reviewId: string
    }>()
);

export const removeReviewError = createAction(
    '[Review Page] Remove Review Error',
    props<{error: string}>()
)

export const loadReviews = createAction(
    '[Review Page] Load Reviews',
    props<{postId: string}>()
)

export const loadReviewsSuccess = createAction(
    '[Review Page] Load Reviews Success',
    props<{reviews: Review[]}>()
)

export const loadReviewsError = createAction(
    '[Review Page] Laod Review Error',
    props<{error: string}>()
)