require("dotenv").config();

require("./models/user");
require("./models/post");
require("./models/comment");

const cors = require('cors'); 

const express = require("express");




const connectDB = require("./db");

const app = express();

app.use(cors());

// app.use(cors({
//   origin: "https://мой-фронтенд.com",

// }))


connectDB();
app.use(express.json());

const authRoutes = require("./routes/auth");

const postRoutes = require("./routes/posts");

const commnetRoutes = require("./routes/comments");

app.use("/auth", authRoutes);

app.use("/comments", commnetRoutes);

app.use("/posts", postRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("success run");
});
