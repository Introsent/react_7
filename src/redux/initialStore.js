import {/*applyMiddleware,*/ combineReducers, createStore} from "redux";
import {chatReducer} from "./chatReducer/chatReducer";
import {messageReducer} from "./messagesReducer/messageReducer";
/*import {createLogger} from "redux-logger/src";*/
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const persisterReducer = persistReducer(persistConfig, reducer)

/*const logger = createLogger({
    diff: true,
    predicate: true
})*/

/*const timer = store => next => action => {
    const delay = action?.meta?.delay
    if(!delay) {
        return next(action)
    }

    const timeout = setTimeout(()=>next(action), delay)

    return () => {
        clearTimeout(timeout)
    }
}*/

export const store = createStore(persisterReducer/*, applyMiddleware(logger)*//*, applyMiddleware(timer)*/)
export const persist = persistStore(store)