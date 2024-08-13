import { DataTypes } from 'sequelize';
import {
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from '../product/product.entity';

@Table
export class Category extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @HasMany(() => Product)
  product: Product;
}
