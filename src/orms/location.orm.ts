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
    name: 'code',
    nullable: false,
  })
  code: string;

  @Column({
    name: 'state',
    nullable: false,
  })
  state: string;

  @Column({
    name: 'description',
    nullable: true,
  })
  description: string | null;

  @Column({
    name: 'sort_id',
    nullable: true,
  })
  sortId: string | null;
  @Column({
    name: 'parent_id',
    nullable: false,
  })
  parentId: number;

  @Column({
    name: 'business_function_description',
    nullable: true,
  })
  businessFunctionDescription: string | null;

  @Column({
    name: 'tenant_id',
    nullable: true,
  })
  tenantId: number;
}
