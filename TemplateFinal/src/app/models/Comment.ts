export class Comment {
    id?: number;
    iduser?: number; // potentially expand to a User model in a more complex scenario
    blogId?: number;
    content?: string;
    commentedAt?: Date;
    parentCommentId?: number; // '?' indicates that this property is optional, might be null or undefined
}
