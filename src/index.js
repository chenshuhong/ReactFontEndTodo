/**
 * @Author: 陈树鸿
 * @Date: 2018--05
 */
import ReactDom from 'react-dom'
import React from "react";
import { createStore,applyMiddleware,compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {cloneDeep} from 'lodash'
import './index.less'
import App from 'page/App'

function changeMultiLayerState(state,changeState,name,value,){
  let names = name.split('.')
  if (names.length>1){
    let firstName = names.shift()
    let firstValue = cloneDeep(state[firstName])
    let evalNameString = ''
    names.map(name=>{
      evalNameString+=`['${name}']`
    })
    eval(`firstValue${evalNameString}=${value}`)
    changeState[firstName] = firstValue
  } else {
    changeState[name]=value
  }
}

React.Component.prototype.myUpdateState = function (value, name) {
  this.setState((prevState)=>{
    let changeState = {}
    if (Object.prototype.toString.call(name)==='[object Array]'){
      name.map((name,index)=>{
        changeMultiLayerState(prevState,changeState,name,value[index])
      })
    } else {
      changeMultiLayerState(prevState,changeState,name,value)
    }
    return changeState
  })
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
)

const element = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDom.render(element,document.getElementById('root'))