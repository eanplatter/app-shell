import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AppA from './app_a/src'
import AppB from './app_b/src'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">App A</Link></li>
        <li><Link to="/app/b">App B</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={AppA}/>
      <Route path="/app/b" component={AppB}/>
    </div>
  </Router>
)
export default BasicExample

