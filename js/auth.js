// 회원가입 , 로그인 , 토큰 검증 🧠
class Auth {
  constructor() {
    // TODO
    //초기값 기억
    //여러명 빠르게 꺼낼 수 있는 Map으로
    //사용자:키(이메일)-값(비밀번호)
    //토큰:키(토큰)-값(이메일) //값(세션)이 오는게 X, session은 사용자 상태 기록 데이터 자체
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

    // 실패시
    //만약 아이디가 없다면?
    if (!this.users.has(email)) return { ok: false, reason: "INVALID_EMAIL" };
    //만약 아이디는 있는데, 비밀번호가 다르다면?
    if (password !== this.users.get(email))
      return { ok: false, reason: "INVALID_PASSWORD" }; // 혹은 INVALID_EMAIL
    // 성공시
    //토큰생성 (Math.random() * 10는 0~9 사이 숫자)(6자리수)
    // const token = Math.floor(Math.random() * 10 * 10 ** 5); //중복문제는 어찌 해결?
    const token = crypto.randomUUID(); //UUID = Universally Unique Identifier
    //생성한 토큰을 tokenSessions에 저장
    this.tokenSessions.set(token, email);
    return { ok: true, token, user: { email } }; // 성공시 (이걸 나중으로 빼자)
  }

  signOut(token) {
    // TODO
    //signOut버튼을 누르면
    // 실패시 - 즉, 토큰이 존재 하지 않으면
    // 성공시
    //tokenSessions의 해당키-값 삭제하고
    if (!this.tokenSessions.has(token))
      return { ok: false, reason: "INVALID_TOKEN" };
    this.tokenSessions.delete(token);
    return { ok: true };
  }

  verify(token) {
    //현재 토큰(세션)이 유효한지 유무를 검사.
    // 성공시
    //만약 토큰이 존재한다면
    if (this.tokenSessions.has(token)) return { ok: true, user: { email } };
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

// console.log(auth.verify(login.token));
// { ok: true, user: { email: 'a@ex.com' } }

console.log(auth.signOut(login.token));
// { ok: true }

// console.log(auth.verify(login.token));
// { ok: false, reason: 'INVALID_TOKEN' } */
