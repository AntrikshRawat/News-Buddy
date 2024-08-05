/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Nav from './parts/Nav'
import News from './parts/News'
import { BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Nav/>
      <Routes>
      <Route exact path='/' element={<News key="general"/>} /> 
      <Route exact path='/business' element={<News key="business" category="business"/>} /> 
      <Route exact path='/entertainment' element={<News key="entertainment" category="entertainment"/>} /> 
      <Route exact path='/health' element={<News key="health" category="health"/>} /> 
      <Route exact path='/science' element={<News key="science" category="science"/>} /> 
      <Route exact path='/sports' element={<News key="gsports" category="sports"/>} /> 
      <Route exact path='/technology' element={<News key="technology" category="technology"/>} /> 
      </Routes>
      </Router>
      </>
    )
  }
}
