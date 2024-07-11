import React, { Component } from 'react'
import PropTypes from "prop-types";
class Kazim extends Component {
  // constructor(){
  //   super();
  //   console.log(this.props);
  // }
  static propTypes = {
    newsData: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  }
  render() {
    
    const {key,title,description}=this.props.newsData;
    return (
      <div><h1>Reactın daha başındayız</h1>
      <form action="">
        <input type='text'/>
        <button>Kaydet</button>
      </form>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>
    )
  }
}

export default Kazim;