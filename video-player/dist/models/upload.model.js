"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Upload = class Upload extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Upload = Upload;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Upload.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Upload.prototype, "title", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'buffer',
        required: true,
    }),
    tslib_1.__metadata("design:type", Buffer)
], Upload.prototype, "video", void 0);
exports.Upload = Upload = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Upload);
//# sourceMappingURL=upload.model.js.map