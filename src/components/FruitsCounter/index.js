// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onIncreaseMango = () => {
    this.setState(prevState => {
      console.log('Increasing')
      return {mangoesCount: prevState.mangoesCount + 1}
    })
  }

  onIncreaseBanana = () => {
    this.setState(prevState => {
      console.log('Increasing')
      return {bananasCount: prevState.bananasCount + 1}
    })
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count-element">{mangoesCount}</span>{' '}
            mangoes <span className="count-element">{bananasCount}</span>{' '}
            bananas
          </h1>
          <div className="fruits-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="btn"
                type="button"
                onClick={this.onIncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
