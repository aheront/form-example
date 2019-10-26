import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../components/Main/component'

const Root = () => (
  <Router>
    <Route path="/" component={Main} />
  </Router>
);

export default Root