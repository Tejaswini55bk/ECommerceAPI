import { CreateProductDto } from './dtos/createproduct.dto';
import { UpdateProductDto } from './dtos/updateproduct.dto';
import { Product } from './product.entity';
export declare class ProductService {
    private prod;
    constructor(prod: typeof Product);
    create(createprod: Partial<CreateProductDto>): Promise<Product>;
    findAll(): Promise<Product[]> | "This action returns all product";
    findOne(id: number): Promise<Product>;
    update(updateProductDto: Partial<UpdateProductDto>): Promise<[affectedCount: number] | "no such product with this id exists">;
    remove(id: number): Promise<number | "no such product with this id exists">;
}
