import React from 'react';
import './App.css';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom'
import Home from './pages';
import ResumePage from './pages/resume';
import ProjectsPage from './pages/projects'
import TodoListPage from './pages/todo'
import CryptoPage from './pages/crypto'

function App() {
  return (
    <Router>
      <HashRouter>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={ResumePage} exact />
        <Route path="/projects" component={ProjectsPage} exact />
        <Route path="/todo" component={TodoListPage} exact />
        <Route path="/crypto" component={CryptoPage} exact />
      </HashRouter>   
    </Router>
  )


}

export default App;
