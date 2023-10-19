export class Blog {
    id!: number;
    iduser!: number;
    title!: string;
    date!: Date;
    description!: string;
    country!: string;
    address!: string;
    comments_id!: number;
    reactions_id!: number[];
    hashtags!: string[];
    pictures!: string; // assuming base64 encoded image string
}
