import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('organisation_unit')
export class OrganisationUnitOrm extends AbstractOrm {
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
  description: string | null;

  @Column({
    name: 'sort_id',
    nullable: true,
  })
  sort_id: string | null;
  @Column({
    name: 'parent_id',
    nullable: false,
  })
  parent_id: number;

  @Column({
    name: 'area_of_operation',
    nullable: true,
  })
  area_of_operation: string | null;

  @Column({
    name: 'org_leaders',
    nullable: true,
  })
  org_leaders: string | null;

  @Column({
    name: 'business_function_description',
    nullable: true,
  })
  business_function_description: string | null;

  @Column({
    name: 'organisation_unit_type_id',
    nullable: false,
  })
  organisation_unit_type_id: number;
}
