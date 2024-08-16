import React, {Component} from "react";
class TwoWay extends Component{
    constructor()
    {
        super()
        this.state={
            inputValue:"Vignesh"
        }
    }
    handleInput=(event)=>
    {
        this.setState(
            {
                inputValue:event.target.value
            }
        )
    }
    render(){
        return(
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
            <h1>{this.state.inputValue}</h1>
        </div>
        )
    }
}
export default TwoWay;