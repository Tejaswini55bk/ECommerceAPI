import { CreateCategoryDto } from './createcategory.dto';
declare const UpdateCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryDto extends UpdateCategoryDto_base {
    id: number;
    name: string;
}
export {};
