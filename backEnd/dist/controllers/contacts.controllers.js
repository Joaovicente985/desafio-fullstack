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
exports.deleteContactController = exports.updateContactController = exports.createContactController = exports.readContactsController = void 0;
const createContact_service_1 = require("../services/contacs/createContact.service");
const readContacts_service_1 = require("../services/contacs/readContacts.service");
const updateContact_service_1 = require("../services/contacs/updateContact.service");
const deleteContact_service_1 = require("../services/contacs/deleteContact.service");
const readContactsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const contacts = yield (0, readContacts_service_1.readContactsService)(userId);
    return res.json(contacts);
});
exports.readContactsController = readContactsController;
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const newContact = yield (0, createContact_service_1.createContactService)(req.body, userId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    const newValues = req.body;
    const updatedContact = yield (0, updateContact_service_1.updateContactService)(contactId, newValues);
    return res.json(updatedContact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = req.params.id;
    yield (0, deleteContact_service_1.deleteContactService)(contactId);
    return res.status(204).send();
});
exports.deleteContactController = deleteContactController;
