import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Uid: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  Username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  City: string;

  @Column({ type: 'int', nullable: true })
  Friend: number;
}