import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// props
// hooks
// render props



export default class Reference extends Component {

    tooltip: HTMLElement | null;
    constructor(props: any) {
        super(props);
        this.tooltip = null;
      }
    handleBoxToggle = (e: any) => {
        if (this.tooltip !== null) {
            console.log(this.tooltip);
            const tooltipDataName = this.tooltip.childNodes[1] as HTMLElement;
            tooltipDataName.innerHTML = "HELLO"
        }
      };

    render() {

        return (
            <div>
              <h2 id="myDiv" onMouseEnter={this.handleBoxToggle} >Hover Here</h2>
                <div className="ui-chart-tooltip"  ref={ref => (this.tooltip = ref)}>
                    <div className="tooltip-date"></div>
                    <div className="tooltip-data-name"></div>
                </div>
            </div>
          );

    }
   
 

};
