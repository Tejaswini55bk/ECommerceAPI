import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    id: number;
    name: string;
    type: string;
    price: number;
    available: boolean;
    proId: number;
}
