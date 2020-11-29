import {AuthorizationStatus} from "../../../consts";
import {ActionType} from "../../action";

const initialStatus = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  isUserStatusLoaded: false,
  errorOnSigning: false,
};

const user = (state = initialStatus, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign(
          {},
          state,
          {
            authorizationStatus: action.payload,
            userInfo: action.userInfo,
            isUserStatusLoaded: true
          }
      );
    case ActionType.ERROR_HAPPENED:
      return Object.assign(
          {},
          state,
          {
            errorOnSigning: true
          }
      );
  }

  return state;
};

export {user};
