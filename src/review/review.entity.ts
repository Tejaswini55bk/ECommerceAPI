import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
@Table
export class Review extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  ratings: number;

  @Column
  comments: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  //     @BelongsTo(type=>User)
  //     user:User;
}
