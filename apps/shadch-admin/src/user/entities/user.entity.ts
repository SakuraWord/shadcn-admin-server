import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar", length: 32 })
  username: string;

  @Column({ type: "varchar", length: 32 })
  password: string

  @Column({ type: "varchar", length: 32 })
  email: string;

  @Column({ type: "varchar", length: 32 })
  phone: string;

  @Column('text')
  description: string; // 描述信息

  @Column()
  avatar: string; // 头像

  @Column({
    type: "enum",
    enum: [1, 2, 3, 0], // 1: 超管，2: 普通管理员，3: 普通用户，0: 禁用用户
    default: 1
  })
  role: number; // 角色 0: 普通用户 1: 管理员

  @Column({ type: "int" })
  age: number

  @CreateDateColumn({ type: "timestamp" })
  create_time: Date
}
