"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaResponse = exports.updateUserSchema = exports.userSchemaRequest = exports.userSchema = void 0;
const zod_1 = require("zod");
const contact_schemas_1 = require("./contact.schemas");
const userSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    fullName: zod_1.z.string().min(10).max(120),
    email: zod_1.z.string().email().min(10).max(45),
    password: zod_1.z.string().min(6),
    phoneNumber: zod_1.z.string().min(8).max(14),
    registerDate: zod_1.z.date().or(zod_1.z.string()),
    contacts: contact_schemas_1.contactsSchemaResponse,
});
exports.userSchema = userSchema;
const userSchemaRequest = userSchema.omit({
    id: true,
    registerDate: true,
    contacts: true,
});
exports.userSchemaRequest = userSchemaRequest;
const userSchemaResponse = userSchema.omit({
    password: true,
});
exports.userSchemaResponse = userSchemaResponse;
const updateUserSchema = userSchemaRequest.partial();
exports.updateUserSchema = updateUserSchema;
