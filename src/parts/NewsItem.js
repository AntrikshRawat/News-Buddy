/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import "../parts/style.css"
export class NewsItem extends Component {
   render() {
      let { title, description,Details,imgUrl } = this.props;
      return (
         <>
    <div className="card mb-3">
  <div className="card-body">
    <img src={imgUrl} alt=".."/>
    <div className="box">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={Details} className="btn btn-primary" target='_main'>More Info...</a></div>
    <p className='m-2'>Published At - {this.props.time}</p>
    <p className='m-2'>Source - {this.props.source}</p>
  </div>
</div>
         </>
      )
   }
}

export default NewsItem