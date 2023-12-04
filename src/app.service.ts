import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'lodash';
import { TenantInfoOrm } from './orms/tenant-info.orm';
import { OrganisationUnitOrm } from './orms/organisation-unit.orm';
import { OrganisationUnitTypeOrm } from './orms/organisation-unit-type.orm';
import { findOperatorParser, getListPagingByEntity } from './utils/common';
import { LocationOfOrgUnitOrm } from './orms/location_of_ou.orm';
import { LocationOrm } from './orms/location.orm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TenantInfoOrm)
    private tenantInfoRepo: Repository<TenantInfoOrm>,
    @InjectRepository(OrganisationUnitOrm)
    private organisationUnitRepo: Repository<OrganisationUnitOrm>,
    @InjectRepository(OrganisationUnitTypeOrm)
    private organisationUnitTypeRepo: Repository<OrganisationUnitTypeOrm>,
    @InjectRepository(LocationOfOrgUnitOrm)
    private locationOfOrgUnitOrmRepo: Repository<LocationOfOrgUnitOrm>,
    @InjectRepository(LocationOrm)
    private locationOrmRepo: Repository<LocationOrm>,
  ) {}
  private AM_ORGANISATION = {
    TENANT_INFO: this.tenantInfoRepo,
    ORGANISATION_UNIT: this.organisationUnitRepo,
    ORGANISATION_UNIT_TYPE: this.organisationUnitTypeRepo,
    LOCATION: this.locationOrmRepo,
    LOCATION_OF_ORG_UNIT: this.locationOfOrgUnitOrmRepo,
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.findOne({ where: parsePayload });
  }

  async getByIds(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.findByIds(parsePayload);
  }

  async getList(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.find(parsePayload);
  }

  async getListPaging(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
    return await getListPagingByEntity(payload, repository);
  }

  async delete(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
    return await repository.delete({ ...payload });
  } 

  async update(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
    const { conditions, data, id } = payload;
    const conditionParser = findOperatorParser(conditions);
    const updateData = Object.assign(
      data,
      id ? { updatedAt: new Date(), updatedBy: id } : {},
    );
    const result = await repository.update(conditionParser, updateData);
    if (!result.affected) {
      return {
        status: 404,
        message: 'NOT_FOUND',
      };
    }
    return repository.findOne({ where: conditionParser }, entity);
  }
  async save(payload?: any, entity?: string) {
    const repository = this.AM_ORGANISATION[entity];
    const { checkExisted, data } = payload;
    if (isEmpty(checkExisted)) {
      return await repository.save({
        ...payload,
        createdAt: new Date(),
        createdBy: payload.id,
      });
    }
    const existed = await repository.findOne({ where: checkExisted }, entity);
    console.log(checkExisted);
    if (!isEmpty(existed)) {
      return {
        status: 400,
        message: 'BAD_REQUEST',
      };
    }
    console.log(data);
    return await repository.save({
      ...data,
      createdAt: new Date(),
      createdBy: data.id,
    });
  }
}
