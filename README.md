# Stopwatch
Online stopwatches implemented using React.

[View Live Demo](https://natedonato.com/reactstopwatch)

## Description
This page allows users to create and run multiple online stopwatches simultaneously.

Once a timer is started buttons will appear to pause, resume, or reset the timer to zero.  Timers can be added and removed, and each will have a unique number at the top.  Numbers reset to One if all timers are removed.

## To-do
Things to add in future updates:

-use Date objects with a shorter interval frequency to more accurately detect time 

-add a 'Lap' button to timers

-countdown timers / alarm timers

## Implementation
Curious how you can build your own timers in React?  Check out this code snippet for a basic stopwatch component:

```javascript
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
        this.handleStop();
        this.setState({
            seconds: 0,
            minutes: 0
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
        })
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
        <div>
            <h1> {this.stringify()} </h1> 
            <button onClick = {this.handleStart} > Start </button> 
            <button onClick = {this.handleStop} > Stop </button> 
            <button onClick = {this.handleReset}> Reset </button> 
        </div>
        );
    }
}

export default Stopwatch;
```

