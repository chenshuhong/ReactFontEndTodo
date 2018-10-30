/**
 * @Author: 陈树鸿
 * @Date: 2018-10-30
 */
//types
const LOGIN_ING = 'LOGIN_ING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

//action
const onLoginSuccess = () => ({
  type: LOGIN_SUCCESS
})
const onLoginError = () => ({
  type: LOGIN_ERROR
})
const onLoginIng = () => ({
  type:LOGIN_ING
})

export function login() {
  return dispatch => {
    dispatch(onLoginIng())
    setTimeout(function () {
      dispatch(onLoginError())
    },5000)
  }
}

//reducer
const defaultState = {
  isAuthenticated: false,
  isLoginIng:false
}
const app = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        isLoginIng:false
      })
    case LOGIN_ERROR:
      return Object.assign({},state,{
        isAuthenticated: false,
        isLoginIng:false
      })
    case LOGIN_ING:
      return Object.assign({},state,{
        isAuthenticated: false,
        isLoginIng:true
      })
    default:
      return state
  }
}

export default app