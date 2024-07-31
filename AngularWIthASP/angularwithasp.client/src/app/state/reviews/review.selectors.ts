import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ReviewState } from "./review.reducer";

export const selectReviews = (state: AppState) => state.reviews;

export const selectAllReviews = createSelector(
  selectReviews,
  (state: ReviewState) => state.reviews
);