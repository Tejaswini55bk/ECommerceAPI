import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.entity';
import { ProductModule } from '../product/product.module';
import { authservice } from './auth.service';
@Module({
  imports: [SequelizeModule.forFeature([User]), ProductModule],
  controllers: [UserController],
  providers: [UserService, authservice, User],
  exports: [UserService, UsersModule, User],
})
export class UsersModule {}
