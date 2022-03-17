import React from "react";
import Quotes from './Quotes';

class RandomQuotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            random: 1
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            random: this.state.random=Math.floor(Math.random()*14)
        })
    }

    render(){
        const expression=this.state.random;
        return(
            <div id="quote-box">
                <Quotes randomNumber={expression}/>
                <button onClick={this.handleClick} id="new-quote">New quote</button>
            </div>
        )
    }

}
export default RandomQuotes;