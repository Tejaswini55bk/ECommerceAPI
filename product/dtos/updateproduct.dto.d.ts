import { CreateProductDto } from './createproduct.dto';
declare const UpdateProductDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    id: number;
    price: number;
    available: boolean;
}
export {};
