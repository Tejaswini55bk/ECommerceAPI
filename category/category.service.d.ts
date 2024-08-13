import { CreateCategoryDto } from './dtos/createcategory.dto';
import { UpdateCategoryDto } from './dtos/updatecategory';
import { Category } from './category.entity';
export declare class CategoryService {
    private repos;
    constructor(repos: typeof Category);
    create(createCategoryDto: Partial<CreateCategoryDto>): Promise<Category>;
    findAll(): Promise<Category[]> | "This action returns all category";
    findOne(id: number): Promise<Category>;
    update(updateCategoryDto: Partial<UpdateCategoryDto>): Promise<[affectedCount: number] | "no such product with this id exists">;
    remove(id: number): Promise<string | number>;
}
