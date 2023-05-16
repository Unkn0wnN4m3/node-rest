import app from "./app.js";
import { sequelize } from "./database/db.js";
// import "./models/Project.js";
// import "./models/Task.js";

async function main() {
  const port = 3000;

  try {
    await sequelize.sync();
    console.log("Connection has been established successfully!");

    app.listen(port, () => {
      console.log(`\nListening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
