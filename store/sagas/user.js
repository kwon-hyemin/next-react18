import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"


function* login(action){
    try{
      const res = yield call(loginAPI, action.data)
      yield put({
        type: LOGIN_SUCCEED,
        data: res.data
      })
    } catch (err) {
      yield put({
        type: LOGIN_FAILED,
        error: err.response.data
      })
    }
  }
export function* watchLogin(){
    yield takeLatest(T.USER_ADD_REQUESTED, login)
}