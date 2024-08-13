import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ReviewsModule } from './review/review.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './review/review.entity';
import { Product } from './product/product.entity';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: process.env.DB_USERNAME,
      port: parseInt(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      models: [Category, Product, User, Review],
      synchronize: true,
    }),
    UsersModule,
    ProductModule,
    ReviewsModule,
    CategoryModule,
  ],
})
export class AppModule {}
