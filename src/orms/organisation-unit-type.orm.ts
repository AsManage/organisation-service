import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('organisation_unit_type')
export class OrganisationUnitTypeOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'tenant_id',
    nullable: false,
  })
  tenant_id: number;
}
