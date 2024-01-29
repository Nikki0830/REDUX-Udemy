const initialState = 0;

const changeNumber = (state = initialState, action) => {
  // name :"counter",
  switch (action.type) {
    case "INCREMENT":
      // return state + 1;
      return state + action.payload;
    case "DECREMENT":
      // return Math.max(state - 1, 0);
      return Math.max(state - action.payload, 0);
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default changeNumber;
