const UPDATE_GREETING = 'UPDATE_GREETING';

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/greetings');
    const greeting = await response.json();
    if (response.ok) {
      dispatch({ type: UPDATE_GREETING, payload: greeting });
    }
  } catch (error) {
    dispatch({ type: UPDATE_GREETING, payload: { text: 'Error: The back-end should be running in port 3001' } });
  }
};

export const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_GREETING:
      return action.payload;
    default:
      return state;
  }
};
