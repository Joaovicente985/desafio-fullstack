"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBodyMiddleware = void 0;
const validateBodyMiddleware = (schema) => (req, res, next) => {
    const validatedBody = schema.parse(req.body);
    req.body = validatedBody;
    return next();
};
exports.validateBodyMiddleware = validateBodyMiddleware;
