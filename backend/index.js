const express = require("express");
const app = express();
const _env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const collegeRoutes = require("./src/routes/college");
const branchRoutes = require("./src/routes/branch");
const semesterRoutes = require("./src/routes/semester");
const courceRoutes = require("./src/routes/cource");
const paperRoutes = require("./src/routes/paper");
const timetableRoutes = require("./src/routes/timetable");
const path = require("path");
const fs = require("fs").promises;
const cors = require("cors");
_env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.yeyo4.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.yeyo4.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", collegeRoutes);
app.use("/api", branchRoutes);
app.use("/api", semesterRoutes);
app.use("/api", courceRoutes);
app.use("/api", paperRoutes);
app.use("/api", timetableRoutes);

app.get("/api", (req, res) => {
  console.log("you are signed in");
  res.send("you are logged in");
});

// app.listen(process.env.PORT||2000,`${process.env.IPADDRESS}`||`localhost`,()=>{
//     console.log(`server running pn port number http://${process.env.IPADDRESS}:${process.env.port}`)
// })

app.listen(process.env.PORT || 2000, () => {
  console.log(
    `server running pn port number http://localhost:${process.env.port}`
  );
});
