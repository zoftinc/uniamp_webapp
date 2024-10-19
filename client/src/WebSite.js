import React, {Component} from 'react';

import DateView from './date_view.js';
import OrderView from './order_view.js';
import Ab1Scoring from './ab1_scoring.js';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Redirect,
}
from "react-router-dom";

const WebSite = (props)=> {
//  console.log('submenu_list_tmp',submenu_list_tmp)
    return (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Ab1Scoring />} />
              <Route path="/ab1_scoring" element={<Ab1Scoring />} />
            </Routes>
          </Router>
        </>
    )
}
export default WebSite;

/*
          <Router>
            <Routes>
              <Route path="/" element={<DateView />} />
              <Route path="/order_view" element={<OrderView />} />
              <Route path="/date_view" element={<DateView />} />
              <Route path="/ab1_scoring" element={<Ab1Scoring />} />
            </Routes>
          </Router>
*/