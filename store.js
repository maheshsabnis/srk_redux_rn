// 1. use ccreateStore()
import { createStore } from "redux";
// 2. import reducers
import reducers from "./reduxapp/reducers/reducers";

// 3. create a store object using reducers
// the 'reducer' will run in global-scope
// and hence it will monitor all actions
// dispatched from UI 
const store = createStore(reducers);

// 4. lets export the store
export default store;



