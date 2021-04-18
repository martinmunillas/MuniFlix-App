const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
