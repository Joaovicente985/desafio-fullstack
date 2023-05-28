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
exports.deleteContactService = void 0;
const contact_entity_1 = require("../../entities/contact.entity");
const data_source_1 = require("../../data-source");
const customErrors_1 = require("../../errors/customErrors");
const deleteContactService = (contactId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepo = data_source_1.appDataSource.getRepository(contact_entity_1.Contact);
    const contact = yield contactRepo.findOneBy({
        id: contactId,
    });
    if (!contact) {
        throw new customErrors_1.customError("Contact not found", 404);
    }
    yield contactRepo.remove(contact);
});
exports.deleteContactService = deleteContactService;
