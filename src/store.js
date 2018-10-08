import { combineReducers } from "redux"; 
import { createStore, compose } from 'redux';
import reducerTwit from './reducers/reducerTwit';

const  rootReducer =  combineReducers({
  reducerTwit
})

export default createStore(
  rootReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)