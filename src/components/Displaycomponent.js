
import React, {Component} from 'react';

export default class DisplayComponent extends Component {

  render() {
    let messageArray = this.props.sayWhat;
    let list = messageArray.map( (message, index) => {
      return (
        <div key={index} className="card">
          <div className="card-body">
            <p className="card-text">{message}</p>
          </div>
        </div>
      )
    });

    return (
      <div >
        <h4 className="card-title">State, props, children, function, fun!</h4>
        <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
        {list}
      </div>
    );
  }
}
