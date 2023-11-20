import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AbstractOrm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: string;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
    default: 'NULL',
  })
  updatedAt: string | null;

  @Column({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: 'NULL',
  })
  deletedAt: string | null;

  @Column({
    name: 'created_by',
    nullable: false,
  })
  createdBy: number;

  @Column({
    name: 'updated_by',
    nullable: true,
    default: null,
  })
  updatedBy: number | null;

  @Column({
    name: 'deleted_by',
    nullable: true,
    default: null,
  })
  deletedBy: number | null;
}
