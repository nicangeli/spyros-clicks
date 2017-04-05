import React from 'react';
import ReactDOM from 'react-dom';
import SimpleClickHandler from './SimpleClickHandler';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleClickHandler />, div);
});
