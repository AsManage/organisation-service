import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('tenant')
export class TenantInfoOrm extends AbstractOrm {
  @Column({
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'location',
    nullable: true,
  })
  location: string;

  @Column({
    name: 'province',
    nullable: true,
  })
  province: string;
  @Column({
    name: 'city',
    nullable: true,
  })
  city: string;

  @Column({
    name: 'country',
    nullable: true,
  })
  country: string;

  @Column({
    name: 'phone',
    nullable: true,
  })
  phone: string;
  @Column({
    name: 'fax',
    nullable: true,
  })
  fax: string;

  @Column({
    name: 'business_registration_code',
    nullable: true,
  })
  business_registration_code: string;
  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'date_of_establishment',
    nullable: true,
  })
  date_of_establishment: string;

  @Column({
    name: 'logo',
    nullable: true,
  })
  logo: string;
  @Column({
    name: 'state',
    nullable: true,
  })
  state: string;
}
