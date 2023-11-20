import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('organisation_unit')
export class OrganisationUnitOrm extends AbstractOrm {
  @Column({
    name: 'organisation_unit_name',
    nullable: false,
  })
  organisation_unit_name: string;

  @Column({
    name: 'organisation_unit_state',
    nullable: false,
  })
  organisation_unit_state: string;

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
    name: 'area_of_operation',
    nullable: true,
  })
  area_of_operation: string;

  @Column({
    name: 'org_leaders',
    nullable: true,
  })
  org_leaders: string;

  @Column({
    name: 'business_function_description',
    nullable: true,
  })
  business_function_description: string;

  @Column({
    name: 'organisation_unit_type_id',
    nullable: false,
  })
  organisation_unit_type_id: number;
}
