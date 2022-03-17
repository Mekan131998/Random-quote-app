import React from 'react'
import {data} from './data';

class Quotes extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div >
                <div id="text">{data[this.props.randomNumber].text}</div>
                <div id="author">{data[this.props.randomNumber].author}</div>
            </div>
        );
    }
}

export default Quotes;