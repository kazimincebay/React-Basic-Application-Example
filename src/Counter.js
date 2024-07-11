import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        sayi:4
      }
      increase(){
        this.setState({
          sayi:this.state.sayi+1
        })
      }
      decrease(){
        this.setState({
          sayi:this.state.sayi-1
        })
      }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
            <h1>{this.state.sayi}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <button onClick={this.increase.bind(this)}>Artır</button>
            
            </div>
            <div className="col"><button onClick={this.decrease.bind(this)}>Azalt</button></div>
          </div>
      </div></div>
    )
  }
}
