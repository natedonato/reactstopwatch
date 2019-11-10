import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            interval: null
        };

        this.handleStart = this.handleStart.bind(this);
        this.tick = this.tick.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleStopAndReset = this.handleStopAndReset.bind(this);
    }

    componentWillUnmount(){
        if(this.state.interval){
            clearInterval(this.state.interval);
        }
    }

    handleStart() {
        if (this.state.interval) {
            return;
        } else {
            let interval = setInterval(this.tick, 1000);
            this.setState({
                interval
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
        this.setState({
            seconds: 0,
            minutes: 0
        });
    }

    handleStopAndReset() {
        this.handleStop();
        this.handleReset();
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
        return ( 
        <div className = "stopwatch">
            <h1> {this.stringify()} </h1> 
            <button onClick = {this.handleStart} > Start </button> 
            <button onClick = {this.handleStop} > Stop </button> 
            <button onClick = {this.handleReset} > Reset </button> 
            <button onClick = {this.handleStopAndReset}> Stop And Reset </button> 
            
            <button onClick={this.props.removeTimer}> REMOVE TIMER </button>
            {/* <p> By Nate Donato</p>
            < a href = "https://github.com/natedonato/reactstopwatch/"> View source and documentation on Github</a> */}
        </div>
        );
    }
}

export default Stopwatch;