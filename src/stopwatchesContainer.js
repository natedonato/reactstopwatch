import React from 'react';
import Stopwatch from './stopwatch';

class StopwatchesContainer extends React.Component{
    constructor(props){
        super(props);
        const timers = [0];
        this.state = {timers};

    }

    addTimer = () => {
        let timers = this.state.timers;

        let lastId = timers[timers.length - 1];
        if(timers.length === 0){
            lastId = -1;
        }

        timers.push(lastId + 1);
        this.setState({timers});
    }

    removeTimer = (id) => {
        let timers = this.state.timers;
        timers = timers.filter( el => el !== id);
        this.setState({timers});
    }

    render(){
        const timers = this.state.timers.map( id =>
            <Stopwatch key={id} id={id} removeTimer={()=>this.removeTimer(id)}/>
            );

        return(
        <>
            {timers}
            <div style={{height: '140px', width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <button onClick = {this.addTimer} className="addButton"> + ADD</button>
            </div>
        </>
        )
    }
}

export default StopwatchesContainer;