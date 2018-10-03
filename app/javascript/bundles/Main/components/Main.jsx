import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header.jsx';
import Mix from './Mix.jsx';

const Main = ({ name, updateName }) => (
  <div>
    <Header />
    <Mix />
  </div>
);

export default Main;
