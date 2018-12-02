import React from 'react';
import { connect } from 'react-redux';
import {getSampleData, getNews} from '../redux/actions';

const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
  };
const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}

class NewsItem extends React.Component {

  componentDidMount(){
    this.props.getNews();
    this.props.getSampleData();
  }

  render(){
    console.log(this.props)
    const {loading, news} = this.props.article;
    if(loading){
      return <div>Loading ...</div>
    }else{
      return news ? <article style={articleStyle} >
                      <div>
                        <h1>{news.title}</h1>
                        <img style={imgStyle} src={news.urlToImage} alt="" />
                        <h4>{news.description}</h4>
                        <a href={news.url} target="_blank">READ MORE</a>
                      </div>
                    </article>:null
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    article: state.sagaReducer,
    data: state.sagaDataSampleReducer
  }
}

const mapDispatchToProps = {
  getNews: getNews,
  getSampleData: getSampleData
}

NewsItem = connect(mapStateToProps,mapDispatchToProps)(NewsItem);
export default NewsItem;