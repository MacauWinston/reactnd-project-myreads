import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BooksSearchPage from './pages/BooksSearchPage';
import './App.css';

class BooksApp extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={BooksPage} />
                        <Route exact path="/search" component={BooksSearchPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BooksApp;