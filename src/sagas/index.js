import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchPolylines } from "../http/axios";
import { getPolylinesFromRes, parsePoints } from "../helpers/OSRM";

 function* handleRouteSelection(action) {
  const res = yield call(fetchPolylines, action.payload.point);
  console.log(res);

 }

export function* routeSaga() {
  yield takeLatest("toggle/route", handleRouteSelection)
}