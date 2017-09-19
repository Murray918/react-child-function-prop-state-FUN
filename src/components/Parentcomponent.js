import React, {Component} from 'react';
import ChildComponent from '../components/Childcomponent.js';
import DisplayComponent from '../components/Displaycomponent';


export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        //we are really in a *bind* here.... :)
        //fix it...
        //state lives here


        this.state = {
            whatToSay: "",
            messages: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e) {
        e.preventDefault();
        //set the state on input change
        let whatToSay = e.target.value
        this.setState({
            whatToSay: whatToSay
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        let messages = this.state.messages;
      messages.push(this.state.whatToSay);

      this.setState({messages: messages});
      this.setState({whatToSay: ""});
    }
    render() {

        return (
          <div className ="col-8">
            <form action = "">
              <div className="form-group">
              <input value ={this.state.whatToSay} onChange = {this.handleInput}
                type= "email" className="form-conntrol"
                aria-describedby="text input" placeholder="Write something!"/>
              </div>
              <ChildComponent
                onClick = {this.handleSubmit}/>
            </form>
            <DisplayComponent sayWhat={this.state.messages}/>
          </div>);
  }
}
