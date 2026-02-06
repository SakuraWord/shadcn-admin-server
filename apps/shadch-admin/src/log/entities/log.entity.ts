import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from '../../user/entities/user.entity';
@Entity()

export class Logs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar", length: 32 })
  user_id: string;

  @Column({ type: "varchar", length: 32 })
  ip: string;

  @CreateDateColumn({ type: "timestamp" })
  create_time: Date;

  @Column({ type: "varchar", length: 256 })
  path: string;

  @Column({ type: "varchar", length: 256 })
  description: string;

  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn({ name: 'user_id' })
  user: User;

}