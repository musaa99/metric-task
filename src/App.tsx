import React, { useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';

import { loadData } from './reduxContent/loadData/actions';

import Dashboard from './components/Dashboard/index';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  dispatch(loadData());
  useEffect(() => {
    dispatch(loadData());
}, [dispatch]);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
