import SyntaxHighLighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const WhatIsAComponent = (props) =>{
    console.log(props + 'props')
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
        <div>
            <h1>{this.state.message}</h1>
            <p>Let's learn how to use React!</p>
            <p>Let's start by using the button below to interact between 2 components</p>
            <button onClick={this.handleClick}>Hello React</button>
        </div>
    );
    }
}

export default HelloReact;
                `}
            </SyntaxHighLighter>
            <span>And the 'GoodJob' component '(blue)' looks like this:</span>
            <br /><br />
            <SyntaxHighLighter className="text-left w-auto" 
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            language="javascript" style={dracula} 
            wrapLines={true}>
                {`
import React, { Component } from "react";

class GoodJob extends Component {
    constructor(props) {
    super(props);
    this.state = {
        message: "Each section with a dotted border it's own component",
        clicks: this.props.clicks
    };
    }

    render() {
    return( 
        <div>
            <h1>{this.state.message}</h1>
            <h1>{this.props.clicks}</h1>
            <p>This number increases by 1 every time you click the "Hello React" Button!</p>
        </div>
    );
    }
}

export default GoodJob;
                `}
            </SyntaxHighLighter>
                <span>Both of these are children of the App.js component. Which lives in our index.js and is ultamately rendered to index.html</span>
                <h1>App.js looks like this:</h1>
                <br /><br />
                <SyntaxHighLighter className="text-left w-auto" 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                language="javascript" style={dracula} 
                wrapLines={true}>
                    {`
import './App.css';
import React, { Component } from 'react';
import HelloReact from './components/HelloReact.component.jsx'
import GoodJob from './components/GoodJob.component.jsx'
import WhatIsAComponent from './components/WhatIsAComponent.component.jsx'

class App extends Component {
    constructor(){
    super();
    this.state = {
        reactNumber:${props.clicks}
    }
    }
    
    incrementReactNumber=(num)=>{
    console.log('clicked')
    this.setState((state)=> {
        console.log(this.state.reactNumber)
        return {reactNumber: state.reactNumber + num};
    });
    }

    render(){
    return (
        <div className="App">
        <HelloReact onActivation={this.incrementReactNumber}/>
        <GoodJob clicks={this.state.reactNumber}/>
        <WhatIsAComponent clicks={this.state.reactNumber}/>

        </div>
    );
    }

}

export default App;
                    `}
                </SyntaxHighLighter>
                <br />
                <p className="text-left">
                    Notice the 'class' declaration and 'this.state'<br/>
                    this.state is like a variable, except when it changes, anything that uses this.state, including component child that use props from state will re-render.
                    <br />
                    <br />
                    When you click the 'Hello React' button, it is triggering the onClick method that calls handleClick on the component
                    <br /><br />
                    Then handle click calls a function from App.js passed down from 'Props'. 
                    <br />
                    The this.propsonActivation called from handleclick, then tells App.js that it needs to run incrementReactNumber
                    <br /> <br />
                    This is tricky, but this function calls setState which i'm still trying to understand
                    <br />
                    But too my knowledge setState can take many forms, ultimately changing the value of a state property. 
                </p>
        </div>
    )
}

export default WhatIsAComponent;