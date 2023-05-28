"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = exports.customError = void 0;
const zod_1 = require("zod");
class customError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.customError = customError;
const handleErrors = (err, req, res, next) => {
    if (err instanceof customError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: err.flatten().fieldErrors,
        });
    }
    return res.status(500).json({
        message: err.message,
    });
};
exports.handleErrors = handleErrors;
