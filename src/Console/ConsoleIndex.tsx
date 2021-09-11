import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class ConsoleIndex extends Component {

    handleClick(e:any) {

        console.log("HELLO ", e)
        
    }

    render() {

        return (
            <div>
                <div id="Wrapper" onClick={this.handleClick}>
                    <h1 className="Title">I am <p>console</p></h1>
                </div>
            </div>
          );

    }
   
 

};
