import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function getQueryParameters(location) {
  return (location.search.split('?')[1] || '').split('&').reduce((queryParameters, keyValuePair) => {
    var [key, value] = keyValuePair.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    queryParameters.set(key, (queryParameters.get(key) || []).concat([value]));
    return queryParameters;
  }, new Map());
}

const token = (getQueryParameters(location).get('token') || [])[0] || '';

ReactDOM.render(
  <App token={token} />,
  document.getElementById('root')
);
