import { Animal } from "./animal";
import { User } from "./user";

export interface Post {
    id: string;
    user: User;
    animal: Animal;
    created: Date;
}