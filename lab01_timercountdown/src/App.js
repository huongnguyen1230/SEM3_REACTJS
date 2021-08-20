import './App.css';
import React from "react";
class App extends React.Component{

    constructor() {
        super();
        this.state = {
            minutes: 5,
            seconds:0
        }
        this.minutesInput= React.createRef();
        this.secondsInput = React.createRef();
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    convertToSeconds = ( minutes,seconds) => {
        return seconds + minutes * 60 ;
    }

    startTimer = () => {
        this.timer = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        const  {minutes, seconds } = this.state;
        let c_seconds = this.convertToSeconds(minutes, seconds);

        if(c_seconds) {

            // seconds change
            seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

            // minutes change
            if(c_seconds % 60 === 0 && minutes) {
                this.setState({minutes: minutes -1});
            }



        } else {
            clearInterval(this.timer);
        }
    }

    resetTimer = () => {
        this.setState({

            minutes: 5,
            seconds: 0
        });
        this.minutesInput.current.value = 5;
        this.secondsInput.current.value = 0;
    }


    render() {
        const { minutes, seconds } = this.state;

        return (
            <div className="App">
                <h1 className="title"> TIMER COUNTDOWN </h1>
                <h1>{minutes}m : {seconds}s </h1>
                <div>
                    <button onClick={this.startTimer} className="start">start</button>
                    <button onClick={this.resetTimer}  className="reset">reset</button>
                </div>

            </div>

        );
    }
}

export default App;

