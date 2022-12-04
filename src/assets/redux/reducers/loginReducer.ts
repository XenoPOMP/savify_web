const defaultState = {
  logged: false,
  token: '',
};

export const loginReducer = (
  state = defaultState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    default:
      return state;
  }
};
