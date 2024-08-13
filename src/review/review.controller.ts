import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './review.service';
import { CreateReviewDto } from './dtos/createreview.dto';
import { UpdateReviewDto } from './dtos/updatereview.dto';
import { HttpStatus, HttpException } from '@nestjs/common';
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}
  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    try {
      return this.reviewsService.create(createReviewDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a review cretion error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get()
  findAllreview() {
    try {
      return this.reviewsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a findall review error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOnerev(@Param('id') id: string) {
    try {
      return this.reviewsService.findOne(parseInt(id));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a findone review error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Patch()
  update(@Body() body: UpdateReviewDto) {
    try {
      return this.reviewsService.update(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a review updatation error message',
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
      return this.reviewsService.remove(parseInt(id));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a review removal error message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
