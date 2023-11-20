import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('organisation_unit_type')
export class OrganisationUnitTypeOrm extends AbstractOrm {
  @Column({
    name: 'organisation_unit_type_name',
    nullable: false,
  })
  otpCode: string;

  @Column({
    name: 'tenant_id',
    nullable: false,
  })
  authInfoId: number;
}
