"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const data_source_1 = require("./data-source");
data_source_1.appDataSource
    .initialize()
    .then(() => {
    console.log("database is connected");
    const PORT = process.env.PORT || 3000;
    app_1.app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
    .catch((error) => console.log(error));
