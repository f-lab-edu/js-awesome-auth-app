// 회원가입 , 로그인 , 토큰 검증 🧠
class Auth {
  constructor() {
    // TODO
    //초기값 기억
    //여러명 빠르게 꺼낼 수 있는 Map으로
    //사용자:키(이메일)-값(비밀번호)
    //토큰세션:키(토큰)-값(세션)
    this.users = new Map(); //로그인, 가입시 사용됨.
    this.tokenSessions = new Map(); //로그인 시 생성하고 반환.
  }

  signUp(email, password) {
    // TODO
    //이미 있는 이메일이면 false.(실패)
    //기존에 없는 새 이메일이면 저장하고, true(성공)
    if (this.users.has(email)) return { ok: false, reason: "EMAIL_HAS" };
    this.users.set(email, password);
    return { ok: true }; // 성공시
  }

  signIn(email, password) {
    // TODO
    //기존에 있는 메일이면 토큰부여, true (성공)
    //기존에 없는 메일이면 또는, 비밀번호가 맞지 않으면 false (실패)
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

/*
const login = auth.signIn("a@ex.com", "1234");
console.log(login);
// { ok: true, token: 'a93f1c...', user: { email: 'a@ex.com' } }

console.log(auth.verify(login.token));
// { ok: true, user: { email: 'a@ex.com' } }

console.log(auth.signOut(login.token));
// { ok: true }

console.log(auth.verify(login.token));
// { ok: false, reason: 'INVALID_TOKEN' } */
