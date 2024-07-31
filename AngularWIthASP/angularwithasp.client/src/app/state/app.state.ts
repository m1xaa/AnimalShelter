import { PostState } from "./posts/post.reducer";
import { ReviewState } from "./reviews/review.reducer";


export interface AppState {
    posts: PostState,
    reviews: ReviewState,
}