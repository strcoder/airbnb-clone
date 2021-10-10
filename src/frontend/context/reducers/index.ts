const reducer = (state: any, payload: any) => {
  switch (payload.type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload.user,
      };
    default: return state;
  }
};

export default reducer;
