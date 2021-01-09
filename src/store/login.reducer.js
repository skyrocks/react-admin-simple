const loginReducer = (state = {isLogin: false}, action) => {
  if (action.type === 'login') {
    return {isLogin: true}
  } else {
    return {isLogin: false}
  }  
}

function login(callback) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({ type: "login" });
      callback()
    }, 1000);
  };
}

export default loginReducer

export { login }