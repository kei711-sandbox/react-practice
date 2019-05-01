import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App param1="foo" param2="bar" param3="baz"/>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
