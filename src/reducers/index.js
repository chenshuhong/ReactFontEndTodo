/**
 * @Author: 陈树鸿
 * @Date: 2018-10-30
 */
import { combineReducers } from 'redux'
import {store} from 'src/index'
import app from './app'

let reducers = {
  app,
}

export default combineReducers(reducers)

export function injectReducer(key,reducer) {
  reducers[key] = reducer
  store.replaceReducer(combineReducers(reducers))
}
 