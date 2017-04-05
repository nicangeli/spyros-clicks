import React from 'react';
import ReactDOM from 'react-dom';
import StillPrettySimpleClickHandler from './StillPrettySimpleClickHandler';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StillPrettySimpleClickHandler />, div);
});
