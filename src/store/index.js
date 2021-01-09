import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import login from './login.reducer'

export default createStore(combineReducers({login}), applyMiddleware(thunk))
