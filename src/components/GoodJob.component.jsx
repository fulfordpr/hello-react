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
        <div className="container border-2 
        border-dashed
        w-1/2 m-auto mt-10 border-blue-400">
            <h1 className="text-xl">{this.state.message}</h1>
            <h1>{this.props.clicks}</h1>
            <p>This number increases by 1 every time you click the "Hello React" Button!</p>
        </div>
    );
  }
}

export default GoodJob;