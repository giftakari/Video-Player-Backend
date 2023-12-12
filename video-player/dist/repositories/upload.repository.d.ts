import { DefaultCrudRepository } from '@loopback/repository';
import { LocaldevDataSource } from '../datasources';
import { Upload, UploadRelations } from '../models';
export declare class UploadRepository extends DefaultCrudRepository<Upload, typeof Upload.prototype.id, UploadRelations> {
    constructor(dataSource: LocaldevDataSource);
}
