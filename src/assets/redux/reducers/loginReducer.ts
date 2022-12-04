const defaultState = {
  logged: false,
  token: '',
};

export const loginReducer = (
  state = defaultState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case 'SET_LOGGED_STATUS': {
      const preState = { ...state };
      preState.logged = action.payload;

      return { ...preState };
    }

    default:
      return state;
  }
};
