"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let CatsService = class CatsService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async create(createCatDto) {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }
    async findAll() {
        return this.catModel.find().exec();
    }
};
CatsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Cat')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.servics.js.map