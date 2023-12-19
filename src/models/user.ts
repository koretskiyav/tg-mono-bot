import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique, Default } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @AutoIncrement
  @Unique
  @PrimaryKey
  @Column
  id!: number;
  
  @Unique
  @Column
  chatId!: string;

  @Column
  subscribed: boolean = false;
}
