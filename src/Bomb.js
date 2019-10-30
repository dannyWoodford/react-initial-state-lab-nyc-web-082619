// your Bomb code here!
import React from 'react'
   

   

    
    class Bomb extends React.Component{

    state={
        secondsLeft: this.props.initialCount
    }

    render(){
        console.log(this.state.secondsLeft)
        
        return <h1>{this.state.secondsLeft === 0 ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!` }</h1>
    }
}

export default Bomb