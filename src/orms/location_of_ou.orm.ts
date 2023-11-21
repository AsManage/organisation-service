import { Entity, Column } from 'typeorm';
import { AbstractOrm } from './abstract.orm';

@Entity('location')
export class LocationOfOrgUnitOrm extends AbstractOrm {
  @Column({
    name: 'organisation_unit_id',
    nullable: false,
  })
  organisation_unit_id: number;

  @Column({
    name: 'location_id',
    nullable: false,
  })
  location_id: number;
}
