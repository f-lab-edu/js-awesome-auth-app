const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //app.get의 get은 HTTP GET Method를 뜻함
  res.send("Hello World!");
});

//Postman- API 테스트
app.post("/login", (req, res) => {
  res.send("Logged in!");
});

app.post("/signup", (req, res) => {
  res.send("Signed up!");
});

app.post("/logout", (req, res) => {
  res.send("Logged out!");
}); //테스트 끝

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
