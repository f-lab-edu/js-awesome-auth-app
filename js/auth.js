// 회원가입 , 로그인 , 토큰 검증 🧠
class Auth {
  constructor() {
    // TODO
  }

  signUp(email, password) {
    // TODO
    return { ok: true }; // 성공시
  }

  signIn(email, password) {
    // TODO
    return { ok: true, token, user: { email } }; // 성공시
    // 실패시
    return { ok: false, reason: "INVALID_PASSWORD" }; // 혹은 INVALID_EMAIL
  }

  signOut(token) {
    // TODO
    // 성공시
    return { ok: true };
    // 실패시 - 즉, 토큰이 존재 하지 않으면
    return { ok: false, reason: "INVALID_TOKEN" };
  }

  verify(token) {
    // 성공시
    return { ok: true, user: { email } };
    // 실패시 - 즉, 토근 존재하지 않으면
    return { ok: false, reason: "INVALID_TOKEN" };
  }
}

const auth = new Auth();

console.log(auth.signUp("a@ex.com", "1234"));
// { ok: true }

console.log(auth.signUp("a@ex.com", "xxxx"));
// { ok: false, reason: "EMAIL_TAKEN" }
// 이메일이 이미 존재 하니까

const login = auth.signIn("a@ex.com", "1234");
console.log(login);
// { ok: true, token: 'a93f1c...', user: { email: 'a@ex.com' } }

console.log(auth.verify(login.token));
// { ok: true, user: { email: 'a@ex.com' } }

console.log(auth.signOut(login.token));
// { ok: true }

console.log(auth.verify(login.token));
// { ok: false, reason: 'INVALID_TOKEN' }
