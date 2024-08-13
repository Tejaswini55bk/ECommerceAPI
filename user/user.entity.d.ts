import { Model } from 'sequelize-typescript';
import { Review } from '../review/review.entity';
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    gender: string;
    reviews: Review;
}
