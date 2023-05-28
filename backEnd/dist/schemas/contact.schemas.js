"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsSchemaResponse = exports.contactSchemaRequest = exports.contactSchema = void 0;
const zod_1 = require("zod");
const contactSchema = zod_1.z.object({
    id: zod_1.z.string(),
    fullName: zod_1.z.string().min(10).max(120),
    email: zod_1.z.string().email().min(10).max(45),
    phoneNumber: zod_1.z.string().min(6).max(45),
    registerDate: zod_1.z.date().or(zod_1.z.string()),
});
exports.contactSchema = contactSchema;
const contactSchemaRequest = contactSchema.omit({
    id: true,
    registerDate: true,
});
exports.contactSchemaRequest = contactSchemaRequest;
const contactsSchemaResponse = zod_1.z.array(contactSchema);
exports.contactsSchemaResponse = contactsSchemaResponse;
