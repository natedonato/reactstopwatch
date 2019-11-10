import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            interval: null,
            started: false,
        };

        this.handleStart = this.handleStart.bind(this);
        this.tick = this.tick.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.toggleStart = this.toggleStart.bind(this);
    }

    componentWillUnmount(){
        if(this.state.interval){
            clearInterval(this.state.interval);
        }
    }

    toggleStart(){
        if(this.state.interval){
            this.handleStop();
        }else{
            this.handleStart();
        }
    }

    handleStart() {
        if (this.state.interval) {
            return;
        } else {
            let interval = setInterval(this.tick, 1000);
            this.setState({
                interval,
                started: true
            });
        }
    }

    handleStop() {
        if (this.state.interval) {
            clearInterval(this.state.interval);
            this.setState({
                interval: null
            });
        }
    }

    handleReset() {
        this.handleStop();
        this.setState({
            seconds: 0,
            minutes: 0,
            started: false
        });
    }

    tick() {
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        seconds += 1;
        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
        }
        this.setState({
            seconds,
            minutes
        });
    }

    stringify() {
        let string = "";
        let minutes = this.state.minutes;
        let seconds = this.state.seconds;
        if (minutes > 9) {
            string += minutes;
        } else {
            string += "0" + minutes;
        }
        string += ":";
        if (seconds > 9) {
            string += seconds;
        } else {
            string += "0" + seconds;
        }
        return string;
    }

    render() {
        let buttontext = this.state.interval ? "STOP" : "RESUME";
        let buttonColor = this.state.interval ? "RED" : "GREEN";

        return ( 
        <div className = "stopwatch">
            < button className = 'x' onClick = {this.props.removeTimer} > X </button>
            <div> Timer #{this.props.id + 1}
            </div>
            <h1> {this.stringify()} </h1> 

            <div className = 'timerControls'>
                {this.state.started ? 
                <>
                    <button className={buttonColor} onClick = {this.toggleStart}>{buttontext}</button>
                    < button onClick = {this.handleReset} > RESET < /button>
                </> 
                : < button onClick = {this.handleStart} > START </button> }
            </div>

           
        </div>
        );
    }
}

export default Stopwatch;