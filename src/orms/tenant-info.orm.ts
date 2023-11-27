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
  location: string | null;

  @Column({
    name: 'province',
    nullable: true,
  })
  province: string | null;
  @Column({
    name: 'city',
    nullable: true,
  })
  city: string | null;

  @Column({
    name: 'country',
    nullable: true,
  })
  country: string | null;

  @Column({
    name: 'phone',
    nullable: true,
  })
  phone: string | null;
  @Column({
    name: 'fax',
    nullable: true,
  })
  fax: string | null;

  @Column({
    name: 'business_registration_code',
    nullable: true,
  })
  businessRegistrationCode: string | null;
  @Column({
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'date_of_establishment',
    nullable: true,
  })
  dateOfEstablishment: string | null;

  @Column({
    name: 'logo',
    nullable: true,
  })
  logo: string | null;
  @Column({
    name: 'state',
    nullable: true,
  })
  state: string | null;
}
