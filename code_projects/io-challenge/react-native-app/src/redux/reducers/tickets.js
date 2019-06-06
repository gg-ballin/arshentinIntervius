const initialState = {
    status: 'INIT',
    network : false
}
  
export default tickets = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case "SET_STATUS":
      return {
          ...state,
          status : action.payload
      };

  
      default:
        return state;
    }
}
  
  

  