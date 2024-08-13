import { Model } from 'sequelize-typescript';
import { Product } from '../product/product.entity';
export declare class Category extends Model {
    id: number;
    name: string;
    product: Product;
}
