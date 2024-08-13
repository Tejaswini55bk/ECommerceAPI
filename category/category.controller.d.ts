import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/createcategory.dto';
import { UpdateCategoryDto } from './dtos/updatecategory';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: Partial<CreateCategoryDto>): Promise<import("./category.entity").Category>;
    findAll(): Promise<import("./category.entity").Category[]> | "This action returns all category";
    findOne(id: string): Promise<import("./category.entity").Category>;
    update(updateCategoryDto: Partial<UpdateCategoryDto>): Promise<[affectedCount: number] | "no such product with this id exists">;
    remove(id: string): Promise<string | number>;
}
