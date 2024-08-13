import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createproduct.dto';
import { UpdateProductDto } from './dtos/updateproduct.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post()
  createproduct(@Body() body: CreateProductDto) {
    try {
      return this.productService.create(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a product creation error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  findAllproduct() {
    try {
      return this.productService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a find all products error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      if (!id) {
        return null; //if id is null(signout) ,we simply return null
      }
      const product = await this.productService.findOne(parseInt(id));
      if (!product) {
        throw new NotFoundException('product not found');
      }
      return product;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a product findone error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Patch('update')
  update(@Body() updateProductDto: Partial<UpdateProductDto>) {
    try {
      return this.productService.update(updateProductDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a product updation error message',
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
      return this.productService.remove(parseInt(id));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a product removal error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
