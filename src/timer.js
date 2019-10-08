import React, { Component } from 'react';
import Time from './time'

class Timer extends Component{

constructor(props){
super(props)
 this.state ={
     timsMs:0
 }


}
start=()=>
{ if(this.state.interval)
    {
        return
    }

    setInterval(
        ()=>{
    this.setState({timsMs: this.state.timsMs+1000})
        },1000
    
    )

}
reset=()=>
{

this.setState({timsMs:0})

}
render(){

return<div>

 <Time ms={this.state.timsMs} />
 <span className="class-button">
<input className="button-start" type="button" value="start" onClick={this.start}/>
<input  className="butoon-reset" type="button" value="reset" onClick={this.reset}/>
</span>
</div>
}
}
export default Timer