import React, {Component} from 'react';

export default class ChildComponent extends Component {
  render() {
    return (
        <button type="submit" className="btn btn-primary" onClick={this.props.onClick}>Submit</button>
      );
  }
}
