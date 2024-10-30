const commonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA': 
    console.log(action)
    return {
        ...state,UserList:action.UserList
    };
    default: return state;
  }
};
export default commonReducer;