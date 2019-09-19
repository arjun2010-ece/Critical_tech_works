import React, { Component } from 'react'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import "./Article.css";

class Article extends Component {
   constructor(props){
      super(props);
      this.state = {
         article: {}
      }
   }
   componentDidMount(){
      const {id} = this.props.match.params;
      axios.get(`http://localhost:7896/articles/${id}`).then((res) => {
         this.setState({article: res.data });
      });
   }
   render() {
      const {article} = this.state;
      const {id} = this.props.match.params;
      if(id > 10 || id <= 0){
         return <Redirect to="/"/>;
      }
      return (
         <div className="product__details">
           <Link to="/"><span className="back_link">Back</span></Link>
            <div className="product_img">
               <img src={article.avatar} alt={article.article__name}/>
            </div>
             <div className="details">
                <h3><span className="details__key"> Name : </span>{article.article__name}</h3>
                <p><span className="details__key">Description: </span>{article.description} is an amazing person with good frontend skills.He can design almost any markup with ease. Flexbox, Bootstrap is his speciality.
                He dates javascript and romances with ReactJs.</p>
             </div> 
         </div>
      )
   }
}
export default Article;