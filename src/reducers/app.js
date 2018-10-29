/**
 * @Author: 陈树鸿
 * @Date: 2018-10-30
 */
const defaultState = {
  isAuthenticated: false
}
const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isAuthenticated: true
      })
    default:
      return state
  }
}

export default app