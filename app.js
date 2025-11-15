const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //app.get의 get은 HTTP GET Method를 뜻함
  res.send("Hello World!");
});

//Postman- API 테스트
app.post("/signup", (req, res) => {
  res.send("Sign up!!! 가입완료");
});

app.post("/signin", (req, res) => {
  res.send("Sign in! 로그인완료");
});

app.post("/signout", (req, res) => {
  res.send("Sign out! 로그아웃");
}); //테스트 끝

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
