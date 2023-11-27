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
  sortId: string | null;
  @Column({
    name: 'parent_id',
    nullable: false,
  })
  parentId: number;

  @Column({
    name: 'area_of_operation',
    nullable: true,
  })
  areaOfOperation: string | null;

  @Column({
    name: 'org_leaders',
    nullable: true,
  })
  orgLeaders: string | null;

  @Column({
    name: 'business_function_description',
    nullable: true,
  })
  businessFunctionDescription: string | null;

  @Column({
    name: 'organisation_unit_type_id',
    nullable: false,
  })
  organisationUnitTypeId: number;
}
