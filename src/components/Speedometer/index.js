// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onClickAccelerateButton = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onClickBrakeButton = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          height="100px"
          width="250px"
        />
        <h1 className="p1">Speed is {count}mph</h1>
        <p className="p2">Min Limit is 0mph, Max Limit is 200mph</p>
        <button
          type="button"
          className="button1"
          onClick={this.onClickAccelerateButton}
        >
          Accelerate
        </button>
        <button
          type="button"
          className="button2"
          onClick={this.onClickBrakeButton}
        >
          Apply Brake
        </button>
      </div>
    )
  }
}

export default Speedometer
