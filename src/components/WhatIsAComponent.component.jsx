import SyntaxHighLighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const WhatIsAComponent = () =>{
    return(
        <div className="container border-2 
        border-dashed
        border-red
        w-3/4 m-auto mt-10
        border-green-400">
            <h4>A Compoment is a function or class that contains JSX code</h4>
            <span>This 'HelloReact' Component '(Purple)' looks like this:</span>
            <br /><br />
            <SyntaxHighLighter className="text-left w-auto" 
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            language="javascript" style={dracula} 
            wrapLines={true}>
                {`
import React, { Component } from "react"; \n

class HelloReact extends Component {
    constructor(props) {
    super(props);
    this.state = {
        message: "Hello Human",
    };
    }

    handleClick = () => {
        this.props.onActivation(1)
    }

    render() {
    return( 
        <div className="container border-2 
        border-dashed
        w-1/2 m-auto
        border-purple-700">
            <h1 className="text-3xl">{this.state.message}</h1>
            <p>Let's learn how to use React!</p>
            <p>Let's start by using the button below to interact between 2 components</p>
            <button className="text-blue-400 
            text-2xl 
            bg-indigo-100 
            rounded-lg 
            shadow-md
            border-none
            px-8 py-2"
            onClick={this.handleClick}
            >Hello React</button>
        </div>
    );
    }
}

export default HelloReact;
                `}
            </SyntaxHighLighter>
        </div>
    )
}

export default WhatIsAComponent;