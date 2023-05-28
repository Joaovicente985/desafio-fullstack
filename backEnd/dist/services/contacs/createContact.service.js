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
exports.createContactService = void 0;
const data_source_1 = require("../../data-source");
const contact_entity_1 = require("../../entities/contact.entity");
const user_entity_1 = require("../../entities/user.entity");
const contact_schemas_1 = require("../../schemas/contact.schemas");
const createContactService = (contactData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.appDataSource.getRepository(contact_entity_1.Contact);
    const userRepo = data_source_1.appDataSource.getRepository(user_entity_1.User);
    const user = yield userRepo.findOneBy({
        id: userId,
    });
    const newContact = contactRepo.create(Object.assign(Object.assign({}, contactData), { user: user }));
    const createContact = yield contactRepo.save(newContact);
    return contact_schemas_1.contactSchema.parse(createContact);
});
exports.createContactService = createContactService;
