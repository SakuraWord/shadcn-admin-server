import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from '../../roles/roles.entity'
import { Logs } from '../../log/entities/log.entity';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Generated('uuid')
  uuid: string

  @Column({ nullable: true, type: "varchar", length: 32 })
  username: string;

  @Column({ nullable: true, type: "varchar", length: 32 })
  password: string

  @Column({ nullable: true, type: "varchar", length: 32 })
  email: string;

  @Column({ type: "varchar", length: 32 })
  phone: string;

  @Column('text')
  description: string; // 描述信息

  @Column()
  avatar: string; // 头像

  @OneToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role; // 角色 0: 普通用户 1: 管理员

  @Column({ type: "int" })
  age: number

  @CreateDateColumn({ type: "timestamp" })
  create_time: Date

  // 告诉和那个表建立关系
  @OneToMany(() => Logs, (log) => log.user)
  logs: Logs[];
}
