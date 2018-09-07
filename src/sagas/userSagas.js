import { put } from "redux-saga/effects";
import { userLoggedIn, userLoginFailure, userLoggedOut } from "../actions/auth";
import history from "../history";

export function* userLoginSaga() {
  try {
    const user =  {token:'usertoken', user:'vivek@tiwari.com'};
    localStorage.bookwormJWT = user.token;
    yield put(userLoggedIn(user));
    history.push("/");
  } catch (err) {
    yield put(userLoginFailure({error: 'failed to login'}));
  }
}

export function* userLogoutSaga() {
  localStorage.removeItem("bookwormJWT");
  yield put(userLoggedOut());
  history.push("/");
}
