"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const data_source_1 = require("../../data-source");
const user_entity_1 = require("../../entities/user.entity");
const user_schemas_1 = require("../../schemas/user.schemas");
const customErrors_1 = require("../../errors/customErrors");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = data.email;
    const userRepo = data_source_1.appDataSource.getRepository(user_entity_1.User);
    const foundUser = yield userRepo.findOne({
        where: {
            email: userEmail,
        },
    });
    if (foundUser) {
        throw new customErrors_1.customError("User already exists.", 409);
    }
    const createUser = userRepo.create(Object.assign({}, data));
    yield userRepo.save(createUser);
    return user_schemas_1.userSchemaResponse.parse(createUser);
});
exports.createUserService = createUserService;
