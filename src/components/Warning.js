import React, { Component } from "react";
import WarningBanner from "./WarningBanner"; 

class Warning extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {showWarning: true}
    //     this.handleToggleClick = this.handleToggleClick.bind(this);
    //   }

      state = {
        showWarning: true
      }
    
      handleToggleClick = () => {
        this.setState({ showWarning: !this.state.showWarning })
      }
      

      render() {
        return (
          <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
          </div>
        );
      }
}

export default Warning;