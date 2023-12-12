/// <reference types="node" />
import { Entity } from '@loopback/repository';
export declare class Upload extends Entity {
    id?: number;
    title: string;
    video: Buffer;
    [prop: string]: any;
    constructor(data?: Partial<Upload>);
}
export interface UploadRelations {
}
export type UploadWithRelations = Upload & UploadRelations;
