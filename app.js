const cors = require("cors");
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");

app.set("view engine", "ejs");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Listening on ${url}`);
});

module.exports = app;