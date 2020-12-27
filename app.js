const express = require("express");
const bodyParser = require("body-parser");
const { db } = require("./config/db");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
require("./routes")(app);

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

