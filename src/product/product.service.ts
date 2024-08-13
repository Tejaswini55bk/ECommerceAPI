import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/createproduct.dto';
import { UpdateProductDto } from './dtos/updateproduct.dto';
import { Product } from './product.entity';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product) private prod: typeof Product) {}

  create(createprod: Partial<CreateProductDto>): Promise<Product> {
    return this.prod.create(createprod);
  }

  findAll() {
    return this.prod.findAll();
    return `This action returns all product`;
  }

  async findOne(id: number) {
    if (!id) {
      return null; //if id is null(signout) ,we simply return null
    }
    const product = await this.prod.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return this.prod.findOne({ where: { id } });
  }

  async update(updateProductDto: Partial<UpdateProductDto>) {
    const product = await this.findOne(updateProductDto.id);
    if (!product) {
      return 'no such product with this id exists';
    }
    const res = this.prod.update(updateProductDto, {
      where: { id: updateProductDto.id },
    });
    return res;
  }

  async remove(id: number) {
    const product = await this.prod.findOne({ where: { id } });
    if (!product) {
      return 'no such product with this id exists';
    }
    return this.prod.destroy({ where: { id } });
  }
}
