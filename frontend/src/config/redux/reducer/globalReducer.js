const initialState = {
  name: "AZISS PRTAMA",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "AZIS GANTENG",
    };
  }
  return state;
};

export default globalReducer;
