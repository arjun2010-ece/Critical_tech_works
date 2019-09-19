import React, { Component, Fragment } from 'react';
import './App.css';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Article from './components/Article/Article';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
             <Fragment>
               <Switch>
                  <Route exact path="/" component={ArticlesList} />
                  <Route exact path="/article/:id" component={Article} />
                  <Route path="*" component={NotFound} />
                </Switch>
             </Fragment>
         </BrowserRouter>
      </div>
    )
  }
}
export default App;