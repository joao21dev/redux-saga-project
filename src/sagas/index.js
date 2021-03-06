import { takeEvery, takeLatest } from "redux-saga/effects";
import getIP from "./ipSagas";
import getUA from "./uaSagas";
import axios from "axios";

function* index() {
  yield [
    takeEvery("LOAD_DATA_REQUEST", getIP, axios),
    takeLatest("LOAD_DATA_UA_REQUEST", getUA, axios),
  ];
}

export default index;
