import React from 'react';
import ModalAlert from '../components/modal';
const success = "success";

import { browserHistory, Router, Link } from 'react-router';

export default class Confirm extends React.Component {

	constructor(props) {
    super(props);

    //set our todos array in state. this could be a db query if this was full stack.
    this.state = {
      success
    }
  }
  
  render() {
    return (
      <div>
        <ModalAlert success={this.state.success}/>

        <ul>
          <li><Link to="/main">Home</Link></li>
          </ul>
      </div>

      
    );
  }

}