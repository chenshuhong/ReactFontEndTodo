/**
 * @Author: 陈树鸿
 * @Date: 2018-11-01
 */

import {sleep} from 'utils/commonUtil'
//types
const REQUEST_LIST = 'REQUEST_LIST'
const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const REQUEST_ERROR = 'REQUEST_ERROR'

//action
const requestSuccess = (data) => ({
  type: REQUEST_SUCCESS,
  payload:{
    data:data,
    inputValue:''
  }
})
const requestListError = () => ({
  type: REQUEST_ERROR
})
const requestListIng = () => ({
  type:REQUEST_LIST
})

export function requestList() {
  return async (dispatch) => {
    dispatch(requestListIng())
    await sleep(5000)
    dispatch(requestSuccess([]))
  }
}


//reducer
const defaultState = {
  data:['A'],
  isFetch:false
}
const reducer = (state = defaultState, {type,payload}) => {
  switch (type) {
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetch:false,
        data:payload.data
      })
    case REQUEST_ERROR:
      return Object.assign({},state,{
        isFetch:false
      })
    case REQUEST_LIST:
      return Object.assign({},state,{
        isFetch:true
      })
    default:
      return state
  }
}

export default reducer