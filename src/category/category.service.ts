import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/createcategory.dto';
import { UpdateCategoryDto } from './dtos/updatecategory';
import { Category } from './category.entity';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private repos: typeof Category) {}
  create(createCategoryDto: Partial<CreateCategoryDto>): Promise<Category> {
    return this.repos.create<Category>(createCategoryDto);
  }

  findAll() {
    return this.repos.findAll();
    return `This action returns all category`;
  }

  async findOne(id: number) {
    const category = await this.repos.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('category not found');
    }
    return this.repos.findOne({ where: { id } });
  }

  async update(updateCategoryDto: Partial<UpdateCategoryDto>) {
    const cat = await this.findOne(updateCategoryDto.id);
    if (!cat) {
      return 'no such product with this id exists';
    }
    return this.repos.update(updateCategoryDto, {
      where: { id: updateCategoryDto.id },
    });
  }

  async remove(id: number) {
    const cat = await this.repos.findOne({ where: { id } });
    if (!cat) {
      return 'no such product with this id exists';
    }
    return this.repos.destroy({ where: { id } });
    return `This action removes a #${id} category`;
  }
}
