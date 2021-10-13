import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryColumn()
  id!: string;
  @Column({ nullable: false })
  title!: string;
  @Column({ nullable: false })
  completed!: boolean;
}
