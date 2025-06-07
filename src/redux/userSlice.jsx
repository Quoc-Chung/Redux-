const initialState = {
  isLoggedIn: false,
  userInfo: null
};

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
