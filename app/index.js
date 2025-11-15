const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //app.get의 get은 HTTP GET Method를 뜻함
  res.send("Hello World!");
});

//Postman- API 테스트
app.post("/signup", (req, res) => {
  res.json({ ok: true }); //뒤에있는 얘를 json 포멧으로 바꾼다.  postman에서 볼 수 있음.
  //send를 다 json으로 바꿔주는게 좋다.
  //다음번까지 다 구현해오기
  //
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
