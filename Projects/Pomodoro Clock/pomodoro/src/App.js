import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import accurateInterval from "accurate-interval";

class LengthControl extends React.Component {
  render() {
    return (
      <div className="length-control">
        <div id={this.props.titleID}>{this.props.title}</div>
        <button id={this.props.subID} onClick={this.props.onClick} value="-">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-caret-down-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
        <div id={this.props.lengthID}>{this.props.length}</div>
        <button id={this.props.addID} onClick={this.props.onClick} value="+">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-caret-up-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brkLength: 5,
      sesLength: 25,
      timerState: "stopped",
      timerType: "Session",
      timer: 1500,
      intervalID: "",
      alarmColor: { color: "white" },
    };
  }

  setBrkLength = (e) => {
    this.lengthControl(
      "brkLength",
      e.currentTarget.value,
      this.state.brkLength,
      "Session"
    );
  };
  setSesLength = (e) => {
    this.lengthControl(
      "sesLength",
      e.currentTarget.value,
      this.state.sesLength,
      "Break"
    );
  };

  lengthControl = (stateLength, value, currentLength, type) => {
    if (this.state.timerState === "running") return;
    if (this.state.timerType === type) {
      if (value === "-" && currentLength !== 1) {
        this.setState({ [stateLength]: currentLength - 1 });
      } else if (value === "+" && currentLength !== 60) {
        this.setState({ [stateLength]: currentLength + 1 });
      }
    } else {
      if (value === "-" && currentLength !== 1) {
        this.setState({
          [stateLength]: currentLength - 1,
          timer: currentLength * 60 - 60,
        });
      } else if (value === "+" && currentLength !== 60) {
        this.setState({
          [stateLength]: currentLength + 1,
          timer: currentLength * 60 - 60,
        });
      }
    }
  };

  timerControl = () => {
    let control =
      this.state.timerState === "stopped"
        ? (this.beginCountDown(), this.setState({ timerState: "running" }))
        : (this.setState({ timerState: "stopped" }),
          this.state.intervalID && this.state.intervalID.cancel());
  };

  beginCountDown = () => {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decrementTimer();
        this.phaseControl();
      }, 1000),
    });
  };

  decrementTimer = () => {
    this.setState({ timer: this.state.timer - 1 });
  };

  phaseControl = () => {
    let timer = this.state.timer;
    this.warning(timer);
    this.buzzer(timer);
    
    if (timer < 0) {
      this.state.timerType === "Session"
        ? (this.state.intervalID && this.state.intervalID.cancel(),
          this.beginCountDown(),
          this.switchTimer(this.state.brkLength * 60, "Break"))
        : (this.state.intervalID && this.state.intervalID.cancel(),
          this.beginCountDown(),
          this.switchTimer(this.state.seshLength * 60, "Session"));
    }
  };

  warning = (_timer) => {
    let warn =
      _timer < 61
        ? this.setState({ alarmColor: { color: "#a50d0d" } })
        : this.setState({ alarmColor: { color: "white" } });
  };

  buzzer = (_timer) => {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  };

  switchTimer = (num, str) => {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: { color: "white" },
    });
  };

  clockify = () => {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  reset = () => {
    this.setState({
      brkLength: 5,
      sesLength: 25,
      timerState: "stopped",
      timerType: "Session",
      timer: 1500,
      intervalID: "",
      alarmColor: { color: "white" },
    });
    this.state.intervalID && this.state.intervalID.cancel();
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  render() {
    return (
      <div>
        <div id="main-title">Pomodoro</div>
        <LengthControl
          titleID="break-label"
          subID="break-decrement"
          addID="break-increment"
          title="Break Length"
          lengthID="break-length"
          length={this.state.brkLength}
          onClick={this.setBrkLength}
        />
        <LengthControl
          titleID="session-label"
          subID="session-decrement"
          addID="session-increment"
          title="Session Length"
          lengthID="session-length"
          length={this.state.sesLength}
          onClick={this.setSesLength}
        />
        <div id="timer">
          <div id="timer-label">{this.state.timerType}</div>
          <div id="timer-left">{this.clockify()}</div>
        </div>
        <div id="timer-control">
          <button id="start_stop" onClick={this.timerControl}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-play-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-pause-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </button>
          <button id="reset" onClick={this.reset}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-repeat"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"
              />
            </svg>
          </button>
        </div>
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
        />
      </div>
    );
  }
}
export default App;
