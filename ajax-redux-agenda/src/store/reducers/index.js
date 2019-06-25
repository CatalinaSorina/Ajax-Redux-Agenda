import { combineReducers } from "redux";

import { reducerAuth } from "./reducerAuth";
import { reducerAgenda } from "./reducerAgenda";

export default combineReducers({
  reducerAuth: reducerAuth,
  reducerAgenda: reducerAgenda
});
