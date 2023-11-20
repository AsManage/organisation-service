import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('tenant')
export class TenantInfoOrm extends AbstractOrm {
  @Column({
    name: 'tenant_name',
    nullable: false,
  })
  tenant_name: string;

  @Column({
    name: 'tenant_location',
    nullable: true,
  })
  tenant_location: string;

  @Column({
    name: 'tenant_province',
    nullable: true,
  })
  tenant_province: string;
  @Column({
    name: 'tenant_city',
    nullable: false,
  })
  tenant_city: string;

  @Column({
    name: 'tenant_country',
    nullable: true,
  })
  tenant_country: string;

  @Column({
    name: 'tenant_phone',
    nullable: true,
  })
  tenant_phone: string;
  @Column({
    name: 'tenant_fax',
    nullable: true,
  })
  tenant_fax: string;

  @Column({
    name: 'business_registration_code',
    nullable: true,
  })
  business_registration_code: string;
  @Column({
    name: 'tenant_email',
    nullable: false,
  })
  tenant_email: string;

  @Column({
    name: 'date_of_establishment',
    nullable: true,
  })
  date_of_establishment: string;

  @Column({
    name: 'tenant_logo',
    nullable: true,
  })
  tenant_logo: string;
  @Column({
    name: 'tenant_state',
    nullable: true,
  })
  tenant_state: string;
}
