import { app } from "./app";
import "dotenv/config";
import { appDataSource } from "./data-source";

appDataSource
  .initialize()
  .then(() => {
    console.log("database is connected");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
