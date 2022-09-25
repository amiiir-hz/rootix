import { createStore, applyMiddleware, compose } from "redux"
import ReduxThunk from "redux-thunk"
import logger from "redux-logger"
// import { createWrapper } from "next-redux-wrapper"
import { persistStore, persistReducer } from "redux-persist"
import localStorage  from 'redux-persist/lib/storage'
import rootReducer from "./reducers/rootReducer"


const middleware = [ReduxThunk,logger]
// const middleware = [ReduxThunk]


// 1
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
// export const wrapper = createWrapper(makeStore)


// 2
// export const store = createStore(rootReducer, applyMiddleware(...middleware))
// export const persistor = persistStore (store);
   
const persistConfig = {
  key: 'root',
  storage:localStorage
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = createStore(persistedReducer, applyMiddleware(...middleware))
 const persistor = persistStore(store)
export default store;
export {persistor}

