"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUserIsAuthenticatedMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const customErrors_1 = require("../errors/customErrors");
const ensureUserIsAuthenticatedMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new customErrors_1.customError("Missing bearer token", 401);
    }
    const rawToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(rawToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new customErrors_1.customError(error.message, 401);
        }
        res.locals.userId = decoded.sub;
    });
    return next();
};
exports.ensureUserIsAuthenticatedMiddleware = ensureUserIsAuthenticatedMiddleware;
