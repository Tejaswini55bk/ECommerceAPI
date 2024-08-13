import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dtos/createreview.dto';
import { UpdateReviewDto } from './dtos/updatereview.dto';
import { Review } from './review.entity';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review) private repos: typeof Review) {}
  create(createReviewDto: Partial<CreateReviewDto>): Promise<Review> {
    const res = this.repos.create(createReviewDto);
    return res;
  }

  findAll() {
    return this.repos.findAll();
  }

  async findOne(id: number) {
    const review = await this.repos.findOne({ where: { id } });
    if (!review) {
      throw new NotFoundException('user not found');
    }
    return this.repos.findOne({ where: { id } });
  }

  async update(updateReviewDto: Partial<UpdateReviewDto>) {
    const review = await this.findOne(updateReviewDto.id);
    if (!review) {
      return 'no such review with this id exists';
    }
    return this.repos.update(updateReviewDto, {
      where: { id: updateReviewDto.id },
    });
  }

  async remove(id: number) {
    const review = await this.repos.findOne({ where: { id } });
    if (!review) {
      return `no such review with this ${id} exists`;
    }
    return this.repos.destroy({ where: { id } });
  }
}
