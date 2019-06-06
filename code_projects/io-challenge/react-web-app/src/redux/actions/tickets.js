import url from 'url';
import axios from 'axios';
export function fetchTickets() {
  return async (dispatch, getState) => {
    dispatch({ type: 'TICKETS_LOADING', payload: {} });
    axios
      .get(url.resolve((process.env.REACT_APP_API_HOST || 'http://localhost:8080'), '/api/tickets'))
      .then(function (response) {
        console.log(response);
        dispatch({ type: 'TICKETS_LOADED', payload: { tickets: response.data.map((ticket) => Object.assign(ticket, {createdOn: new Date(ticket.createdOn)})) } });
      })
      .catch(function (error) {
        console.error(error)
        dispatch({ type: 'TICKETS_LOAD_ERROR', payload: {} });
      })
  }
}
