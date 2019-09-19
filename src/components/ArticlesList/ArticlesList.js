import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./ArticlesList.css";

class ArticlesList extends Component {
   constructor(props){
      super(props);
      this.state = {
         articles:[]
      }
   }
 componentDidMount(){
   axios.get("http://localhost:7896/articles").then((res) => {
      this.setState({articles: res.data });
   });
 }
 render() {
  const {articles} = this.state;
  
  const articlesList = articles.map(article => (
     <div className="article" key={article.id}>
       <h1><Link to={`/article/${article.id}`}>{article.article__name}</Link></h1>
     </div>
  ));
  if(!articles ){
      return null;
  }
  return (
   <div className="container">
    <h1 className="articlesList">Articles Lists :</h1>
    <p>Please click on each article to get its details.</p>
      {articlesList}
   </div>
  )
 }
}
export default ArticlesList;