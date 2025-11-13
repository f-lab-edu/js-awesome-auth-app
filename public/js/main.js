// 폼 제출, 버튼 작동 👁️🖐️
// Auth 클래스 불러오기
// (browser에 script로 auth.js→main.js로 실행,
// Auth 클래스 전역(global)스코프로 등록, 여기서 바로 사용가능)
const auth = new Auth();

//Html요소 변수로
const form = document.querySelector("#sign-in");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

//폼 제출 이벤트
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼의 기본 새로고침 막기

  const email = emailInput.value;
  const password = passwordInput.value;

  const result = auth.signIn(email, password);
  console.log(result);

  if (result.ok) {
    alert("로그인 되었습니다.");
  } else {
    alert("로그인 실패: " + result.reason);
  }
});
