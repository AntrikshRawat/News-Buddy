/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Load from './Load'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:"in",
    category:"general",
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    time:PropTypes.string,
    source:PropTypes.string
  }
 totalPage = 0;
 constructor() {
  super();
  this.state = {
   articles: [],
   loading: true,
   page:1,
  }
 }
  nextClick= async() =>{
  this.setState({
   page: this.state.page + 1,
   loading: true
  });
  let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73efaf125ba7425cad2f0e3450f77e49&pageSize=10&page=${this.state.page}`;
  let rawData = await fetch(URL);
  let data = await rawData.json();
  this.setState({ articles: data.articles });
  this.setState({loading: false});
 }
 preClick=async() =>{
  this.setState({
   page: this.state.page - 1,
   loading:true
  });
  let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73efaf125ba7425cad2f0e3450f77e49&pageSize=10&page=${this.state.page}`;
  let rawData = await fetch(URL);
  let data = await rawData.json();
  this.setState({ articles: data.articles });
  this.setState({loading: false});
 }
 async componentDidMount() {
  let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73efaf125ba7425cad2f0e3450f77e49&pageSize=10&page=${this.state.page}`;
  let rawData = await fetch(URL);
  let data = await rawData.json(); 
  this.totalPage = parseInt(data.totalResults/10 + 1);
  this.setState({ articles: data.articles });
  this.setState({loading: false});
 }
 render() {
  return (
    <>
    {this.state.loading && <Load/>}
   <div className='container'>
    <h1 className='mt-4 mb-4' style={{ width: "95%", textAlign: "center"}}>Top Headlines{"-"+this.props.category.toUpperCase()}</h1>
    {!this.state.loading && this.state.articles.map((ele) => {
     return (
      <div className="container" key={ele.url}>
       <NewsItem title={ele.title}
        description={ele.description}
        Details={ele.url} imgUrl = {ele.urlToImage!==null?ele.urlToImage:"https://imgs.search.brave.com/ZCtqi7ZwZseoNXRAknM6JaXRrSZI0S9QVegUVNMrZtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/Nzg1ODUwNi9waG90/by9uZXdzLW9ubGlu/ZS1pbi1waG9uZS1y/ZWFkaW5nLW5ld3Nw/YXBlci1mcm9tLXdl/YnNpdGUtZGlnaXRh/bC1wdWJsaWNhdGlv/bi1hbmQtbWFnYXpp/bmUtbW9ja3VwLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPUc5RUdiSVBy/MUQ1OWJfZFNkckZZ/S1h0NXBDNDAyVV9O/QVdGZWZIamstQk09"} 
        time={ele.publishedAt.slice(0,10)}
        source = {ele.source.name}/>
      </div>
     )
    })}
    <div className="container d-flex justify-content-lg-between">
    <button onClick={this.preClick} disabled = {this.state.page<=1||this.state.loading} type="button" className="btn btn-outline-info m-4">&larr; Previous</button>
    <button disabled = "true" className="btn btn-outline-info m-4">{this.state.page}/{this.totalPage||this.state.loading}</button>
    <button onClick={this.nextClick} disabled = {this.state.page===this.totalPage||this.state.loading} type="button" className="btn btn-outline-info m-4">Next &rarr;</button>
    </div>
   </div></>
  )
 }
}

export default News