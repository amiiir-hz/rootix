const mode = (state = { selectMode: "light" }, action) => {
  switch (action.type) {
    // case "light":
    //   return {
    //     ...state,
    //     selectMode: "light",
    //   };
    // case "dark":
    //   return {
    //     ...state,
    //     selectMode: "dark",
    //   };
    case "select":
      return {
        ...state,
        selectMode: action.payload,
      };
    default:
      return state;
  }
};
export default mode;
