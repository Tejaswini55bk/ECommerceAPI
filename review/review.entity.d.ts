import { Model } from 'sequelize-typescript';
export declare class Review extends Model {
    id: number;
    ratings: number;
    comments: string;
    userId: number;
}
