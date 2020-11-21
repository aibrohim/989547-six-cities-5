import {combineReducers} from "redux";
import {appProcess} from "../reducers/app-process/app-process.js";
import {appData} from "../reducers/app-data/app-data.js";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
});
