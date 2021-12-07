import React, { Component } from "react";

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
