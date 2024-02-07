import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./task";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(
  reducer,
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  devToolsEnhancer({ trace: true })
);

export default store;
