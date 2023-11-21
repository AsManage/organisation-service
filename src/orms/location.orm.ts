import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('location')
export class LocationOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'state',
    nullable: false,
  })
  state: string;

  @Column({
    name: 'description',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'sort_id',
    nullable: true,
  })
  sort_id: string;
  @Column({
    name: 'parent_id',
    nullable: false,
  })
  parent_id: number;

  @Column({
    name: 'business_function_description',
    nullable: true,
  })
  business_function_description: string;

  @Column({
    name: 'tenant_id',
    nullable: true,
  })
  tenant_id: number;
}
