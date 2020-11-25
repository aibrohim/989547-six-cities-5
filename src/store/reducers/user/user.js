import {AuthorizationStatus} from "../../../consts";
import {ActionType} from "../../action";

const initialStatus = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {}
};

const user = (state = initialStatus, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign(
          {},
          state,
          {
            authorizationStatus: action.payload,
            userInfo: action.userInfo
          }
      );
  }

  return state;
};

export {user};
