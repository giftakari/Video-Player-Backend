"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UploadController = class UploadController {
    constructor(uploadRepository) {
        this.uploadRepository = uploadRepository;
    }
    async create(upload) {
        return this.uploadRepository.create(upload);
    }
    async count(where) {
        return this.uploadRepository.count(where);
    }
    async find(filter) {
        return this.uploadRepository.find(filter);
    }
    async updateAll(upload, where) {
        return this.uploadRepository.updateAll(upload, where);
    }
    async findById(id, filter) {
        return this.uploadRepository.findById(id, filter);
    }
    async updateById(id, upload) {
        await this.uploadRepository.updateById(id, upload);
    }
    async replaceById(id, upload) {
        await this.uploadRepository.replaceById(id, upload);
    }
    async deleteById(id) {
        await this.uploadRepository.deleteById(id);
    }
};
exports.UploadController = UploadController;
tslib_1.__decorate([
    (0, rest_1.post)('/uploads'),
    (0, rest_1.response)(200, {
        description: 'Upload model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Upload) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Upload, {
                    title: 'NewUpload',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Upload]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/uploads/count'),
    (0, rest_1.response)(200, {
        description: 'Upload model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Upload)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/uploads'),
    (0, rest_1.response)(200, {
        description: 'Array of Upload model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Upload, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Upload)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/uploads'),
    (0, rest_1.response)(200, {
        description: 'Upload PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Upload, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Upload)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Upload, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/uploads/{id}'),
    (0, rest_1.response)(200, {
        description: 'Upload model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Upload, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Upload, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/uploads/{id}'),
    (0, rest_1.response)(204, {
        description: 'Upload PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Upload, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Upload]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/uploads/{id}'),
    (0, rest_1.response)(204, {
        description: 'Upload PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Upload]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/uploads/{id}'),
    (0, rest_1.response)(204, {
        description: 'Upload DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UploadController.prototype, "deleteById", null);
exports.UploadController = UploadController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UploadRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UploadRepository])
], UploadController);
//# sourceMappingURL=upload.controller.js.map