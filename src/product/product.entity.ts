import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Category } from '../category/category.entity';

@Table
export class Product extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  type: string;

  @Column
  price: number;

  @Column({ defaultValue: false })
  available: boolean;

  @ForeignKey(() => Category)
  @Column
  proId: number;

  // @BelongsTo(()=>Category)
  // cat:Category
}
