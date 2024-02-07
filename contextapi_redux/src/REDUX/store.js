import { createStore } from "redux";

import rootReducer from "./reducers/Rindex";

//this is a centralized store now
//if anybody needs the store the they can use this store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
