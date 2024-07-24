import { Post } from "./post";
import { User } from "./user";

export interface Review {
    id: string;
    post: Post;
    user: User;
    content: string;
}