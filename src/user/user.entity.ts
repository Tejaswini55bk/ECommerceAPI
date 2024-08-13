import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Exclude } from 'class-transformer';
import { AutoIncrement } from 'sequelize-typescript';
import { Review } from '../review/review.entity';
import { IsEnum } from 'class-validator';
import { uservalue } from './enums/uservalue.enum';

@Table
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  @Exclude({})
  password: string;

  @Column({
    allowNull: false,
  })
  @IsEnum(uservalue)
  gender: string;

  @HasMany(() => Review)
  reviews: Review;
}
