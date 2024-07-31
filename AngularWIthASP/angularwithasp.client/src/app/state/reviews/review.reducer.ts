import { createReducer, on } from "@ngrx/store";
import { Review } from "../../models/as-is/review";
import { addReviewError, addReviewSuccess, loadReviews, loadReviewsError, loadReviewsSuccess, removeReviewError, removeReviewSuccess } from "./review.actions";

export interface ReviewState {
    reviews: Review[],
    error: string
}

export const initialState: ReviewState = {
    reviews: [],
    error: ''
}

export const ReviewReducer = createReducer(
    initialState,
    on(loadReviewsSuccess, (state, {reviews}) =>({
        ...state,
        reviews: reviews
    })),
    on(loadReviewsError, (state, {error}) => ({
        ...state,
        error: error
    })),
    on(addReviewSuccess, (state, {review}) => ({
        ...state,
        reviews: [...state.reviews, review]
    })),
    on(addReviewError, (state, {error}) => ({
        ...state,
        error: error
    })),
    on(removeReviewSuccess, (state, {postId, reviewId}) =>({
        ...state,
        reviews: state.reviews.filter(r => r.id !== reviewId)
    })),
    on(removeReviewError, (state, {error}) => ({
        ...state,
        error: error
    }))
)