import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('location_of_ou')
export class LocationOfOrgUnitOrm extends AbstractOrm {
  @Column({
    name: 'organisation_unit_id',
    nullable: false,
  })
  organisationUnitId: number;

  @Column({
    name: 'location_id',
    nullable: false,
  })
  locationId: number;
}
