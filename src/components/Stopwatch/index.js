// Write your code here
import {Component} from 'react'

import './index.css'

const stopWatch = 'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png'
const stopWatchAlt = 'stopwatch'

const initialTimer = {time: 0, isTimerRunning: false}

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = initialTimer
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  onStart = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(this.increaseTheTime, 1000)
      this.setState({isTimerRunning: true})
    }
  }

  increaseTheTime = () => {
    this.setState(prev => ({time: prev.time + 1}))
    const {time} = this.state
    console.log(time)
  }

  onStop = () => {
    this.clearTimeInterval()
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState({...initialTimer})
  }

  getTheTimer = () => {
    const {time} = this.state
    let minutes = Math.floor(parseInt(time) / 60)
    let seconds = Math.floor(parseInt(time) % 60)
    minutes = minutes > 9 ? minutes : `0${minutes}`
    seconds = seconds > 9 ? seconds : `0${seconds}`
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="timer-head">
            <img
              src={stopWatch}
              alt={stopWatchAlt}
              className="stop-watch-img"
            />
            <p className="timer-para">Timer</p>
          </div>
          <h1 className="actual-timer">{this.getTheTimer()}</h1>
          <div className="control-btn-card">
            <button
              type="button"
              className="btn start-btn"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop-btn"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
