const initialState = {
  all : null,
  current: null,
  status: 'INIT'
}

const actionHandlers = {
  "TICKETS_LOADING": (action) => ({
    all: action.payload
  }),
  "TICKETS_LOADED": (action) => ({
    all: action.payload
  }),
  "TICKETS_LOAD_ERROR": (action) => ({
    all: action.payload
  })
}

export default (state = initialState, action = {}) => {
  
  const handler = actionHandlers[action.type];

  const newState = handler ? Object.assign(
    {},
    state,
    handler(action),
    {
      status: action.type
    }
  )
    : state;

  console.log('================TICKET STORE====================');
  console.log(newState);
  console.log('=================REDUX===================');

  return newState;
}
  