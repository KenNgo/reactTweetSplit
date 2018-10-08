const reducerTwit = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TWIT':
    	return state.concat([action.data]);
    default:
      return state;
  	}
};

export default reducerTwit;