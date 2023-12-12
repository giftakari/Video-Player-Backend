import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LocaldevDataSource} from '../datasources';
import {Upload, UploadRelations} from '../models';

export class UploadRepository extends DefaultCrudRepository<
  Upload,
  typeof Upload.prototype.id,
  UploadRelations
> {
  constructor(
    @inject('datasources.localdev') dataSource: LocaldevDataSource,
  ) {
    super(Upload, dataSource);
  }
}
