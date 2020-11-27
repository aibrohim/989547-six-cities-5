import {AuthorizationStatus} from "../../../consts";
import {ActionType} from "../../action";

const initialStatus = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
  isUserStatusLoaded: false
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
  }

  return state;
};

export {user};
