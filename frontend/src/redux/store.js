import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { collegeListReducer } from "./reducers/collegeReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  collegesList: collegeListReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
