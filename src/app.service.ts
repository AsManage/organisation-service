import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'lodash';
import { TenantInfoOrm } from './orms/tenant-info.orm';
import { OrganisationUnitOrm } from './orms/organisation-unit.orm';
import { OrganisationUnitTypeOrm } from './orms/organisation-unit-type.orm';
import { findOperatorParser, getListPagingByEntity } from './utils/common';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TenantInfoOrm)
    private tenantInfoRepo: Repository<TenantInfoOrm>,
    @InjectRepository(OrganisationUnitOrm)
    private organisationUnitRepo: Repository<OrganisationUnitOrm>,
    @InjectRepository(OrganisationUnitTypeOrm)
    private organisationUnitTypeRepo: Repository<OrganisationUnitTypeOrm>,
  ) {}
  private AM_ORGANISATION = {
    TENTANT_INFO: this.tenantInfoRepo,
    ORGANISATION_UNIT: this.organisationUnitRepo,
    ORGANISATION_UNIT_TYPE: this.organisationUnitTypeRepo,
  };

  async getOne(payload?: any, entity?: string) {
    const parsePayload = findOperatorParser(payload);
    const repository = this.AM_ORGANISATION[entity];
    return await repository.findOne(parsePayload);
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
    return await repository.save({
      ...data,
      createdAt: new Date(),
      createdBy: data.id,
    });
  }
}