import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { usersRoutes } from "./routes/users.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleErrors } from "./errors/customErrors";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("users", usersRoutes);
app.use("/contacts", contactsRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors);

export { app };
