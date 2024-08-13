import { Module } from '@nestjs/common';
import { ReviewsService } from './review.service';
import { ReviewsController } from './review.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review.entity';
import { ProductModule } from '../product/product.module';
import { UsersModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Review, User]),
    ProductModule,
    UsersModule,
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, UserService],
})
export class ReviewsModule {}
