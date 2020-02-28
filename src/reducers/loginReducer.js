import { createAction, handleActions } from 'redux-actions';
import {
    Alert,
  } from 'react-native';
  
//액션타입 정의
export const NORMAL_LOGIN   = "login/NORMAL_LOGIN";
export const KAKAO_LOGIN    = "login/KAKAO_LOGIN";
export const USER_REGISTER  = "login/USER_REGISTER";
export const LOGIN_SUCCESS  = "login/LOGIN_SUCCESS";
export const LOGIN_FAIL     = "login/LOGIN_FAIL";
export const SEARCH_ID      = "login/SEARCH_ID";
export const SEARCH_PW      = "login/SEARCH_PW";

//액션 생성 함수 정의
// export const normal_login   = createAction(NORMAL_LOGIN);
export function normal_login() {
  return {
      type: NORMAL_LOGIN
  };
}
export const kakao_login    = createAction(KAKAO_LOGIN);
export const user_register  = createAction(USER_REGISTER);
export const login_success  = createAction(LOGIN_SUCCESS);
export const login_fail     = createAction(LOGIN_FAIL);
export const search_id      = createAction(SEARCH_ID);
export const search_pw      = createAction(SEARCH_PW);

//모듈의 초기 상태 정의
const initialState = {
    login_state: 0
  };

//액션을 처리하는 리듀서 함수 정의
export default handleActions({
    [NORMAL_LOGIN]  : (state, action) => {
      //일반 로그인에대한 로직 처리
      return { login_state : "일반 로그인" }; 
    },
    [KAKAO_LOGIN]   : (state, action) => {
      //카카오 로그인에대한 로직 처리
      return { login_state : "카카오 로그인" }; 
    },
    [USER_REGISTER] : (state, action) => {
      //회원 가입에대한 로직 처리
      return { login_state : "회원 가입" }; 
    },
    [LOGIN_SUCCESS] : (state, action) => {
      //로그인 성공에대한 로직 처리
      return { login_state : "로그인 성공" }; 
    },
    [LOGIN_FAIL]    : (state, action) => {
      //일반 로그인에대한 로직 처리
      return { login_state : "로그인 실패" }; 
    },
    [SEARCH_ID]     : (state, action) => {
      //로그인 실패에대한 로직 처리
      return { login_state : "아이디 찾기" }; 
    },
    [SEARCH_PW]     : (state, action) => {
      //비밀번호 찾기에대한 로직 처리
      return { login_state : "비밀번호 찾기" }; 
    },
}, initialState)

