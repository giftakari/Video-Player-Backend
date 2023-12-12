import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Upload } from '../models';
import { UploadRepository } from '../repositories';
export declare class UploadController {
    uploadRepository: UploadRepository;
    constructor(uploadRepository: UploadRepository);
    create(upload: Upload): Promise<Upload>;
    count(where?: Where<Upload>): Promise<Count>;
    find(filter?: Filter<Upload>): Promise<Upload[]>;
    updateAll(upload: Upload, where?: Where<Upload>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Upload>): Promise<Upload>;
    updateById(id: number, upload: Upload): Promise<void>;
    replaceById(id: number, upload: Upload): Promise<void>;
    deleteById(id: number): Promise<void>;
}
