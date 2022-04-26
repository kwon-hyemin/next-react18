import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin,watchLogout} from "./userSaga.ts";
import * as _ from 'lodash'

export default function* rootSaga() {
    yield all([watchJoin(), watchLogin(), watchLogout()]);
    // watchJoin()
  }

