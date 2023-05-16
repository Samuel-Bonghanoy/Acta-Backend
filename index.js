const express = require("express");
const app = express();

const db = require("./server/models");

const { Post } = require("./server/models");

const postRouter = require("./server/routes/postRoutes");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/post", postRouter);

db.sequelize.sync().then((req) => {
  app.listen(10041, () => {
    console.log("server running on port 10041");
  });
});

// "username": "user",
//     "password": "Sf1EZ7vN",
//     "database": "acta_app",
//     "host": "mysql-126667-0.cloudclusters.net",
//     "dialect": "mysql"
