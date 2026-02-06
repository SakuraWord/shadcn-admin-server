import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true, type: "varchar", length: 32 })
  name: string;

  @Column({
    type: "enum",
    enum: [1, 2, 3, 0], // 1: 超管，2: 普通管理员，3: 普通用户，0: 禁用用户
    default: 1
  })
  role: number; // 角色 0: 普通用户 1: 管理员

  @Column({ nullable: true, type: "varchar", length: 256 })
  description: string; // 角色描述
}
