const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let datas = [];
let workList = [];

app.get("/", (req, res) => {
  let today = new Date();
  // let day = today.getDay();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let dayName = today.toLocaleDateString("hi-IN", options);

  res.render("list", { listTitle: dayName, newListItems: datas });
});

app.post("/", (req, res) => {
  let data = req.body.firstItem;

  if (req.body.list === "work") {
    workList.push(data);
    res.redirect("/work");
  } else {
    datas.push(data);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workList });
});

app.post("/work", (req, res) => {
  let works = req.body.firstItem;
  workList.push(works);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
