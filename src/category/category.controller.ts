import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/createcategory.dto';
import { UpdateCategoryDto } from './dtos/updatecategory';
import { HttpException, HttpStatus } from '@nestjs/common';
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: Partial<CreateCategoryDto>) {
    try {
      return this.categoryService.create(createCategoryDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a category creation error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  findAll() {
    try {
      return this.categoryService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a findall category error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.categoryService.findOne(+id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a findone category error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Patch('update')
  update(@Body() updateCategoryDto: Partial<UpdateCategoryDto>) {
    try {
      return this.categoryService.update(updateCategoryDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a category updation error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.categoryService.remove(+id);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a category removal error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
