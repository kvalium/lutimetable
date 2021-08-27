import React from 'react';
import ReactDOM from 'react-dom';
import 'rsuite/styles/index.less';
import './app.less';
import { Timetable } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Timetable />
  </React.StrictMode>,
  document.getElementById('root')
)
