import React from 'react';
import Funnies from './Funnies';
import Fade from "@material-ui/core/Fade"; 
import Typography from "@material-ui/core/Typography";

export default class FunniesComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.funnies = new Funnies(props.customMessages, props.options);
    this.state.message = this.state.funnies.message();
    // periodically, update the message to be something else
    this.changeMessage(props);
  }
  componentWillUnmount() {
    clearTimeout(this.state.interval);
  }
  changeMessage(props=this.props) {
    if (props.interval > 0) {
      // eslint-disable-next-line
      this.state.interval = setTimeout(() => {
        this.setState({ message: this.state.funnies.message() });
        // eslint-disable-next-line
        this.state.interval = setTimeout(this.changeMessage.bind(this), props.interval);
      }, props.interval);
    }
  }
  render() {
    return (
      <Fade in>
        <div>
          <Typography variant="body2" align="center">
            <span
              key={this.state.message}
            >
              {this.state.message}
            </span>
          </Typography> 
        </div>
      </Fade>
    );
  }
}
FunniesComponent.defaultProps = {interval: 8000, customMessages: [], options: {}};

// for browser support
if (typeof window !== 'undefined') {
  window.FunniesComponent = FunniesComponent;
}