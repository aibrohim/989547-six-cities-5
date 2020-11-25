import {combineReducers} from "redux";
import {appProcess} from "./app-process/app-process";
import {appData} from "./app-data/app-data";
import {user} from "./user/user.js";

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.PROCESS]: appProcess,
  [NameSpace.USER]: user,
});
