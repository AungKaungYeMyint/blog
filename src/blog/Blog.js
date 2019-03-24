import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from './components/login/login';
import Register from './components/register/register';
import Article from './components/article/article';
import CreateArticle from './components/create_article/create_article';

class Blog extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>An awesome blog will be here</h1>
        <Router>
          <Link to='/login'>Login</Link><br/>
          <Link to='/register'>Register</Link><br/>
          <Link to='/article'>Article</Link><br/>
          <Link to='/createArticle'>Create Article</Link>

          <Route path='/login' component={Login} addNewEventHandler={this.userLogin}></Route>
          <Route path='/register' component={Register}></Route>
          <Route exact path='/article' component={Article}></Route>
          <Route path='/createArticle' component={CreateArticle}></Route>
        </Router> 
      </React.Fragment>
    );
  }
}

export default Blog