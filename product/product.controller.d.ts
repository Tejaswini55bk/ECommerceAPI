import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createproduct.dto';
import { UpdateProductDto } from './dtos/updateproduct.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createproduct(body: CreateProductDto): Promise<import("./product.entity").Product>;
    findAllproduct(): Promise<import("./product.entity").Product[]> | "This action returns all product";
    findOne(id: string): Promise<import("./product.entity").Product>;
    update(updateProductDto: Partial<UpdateProductDto>): Promise<[affectedCount: number] | "no such product with this id exists">;
    remove(id: string): Promise<number | "no such product with this id exists">;
}
