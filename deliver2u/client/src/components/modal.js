import React from 'react';

export default class ModalAlert extends React.Component {
  render() {
    //task and action header names. simple component. 
    return (
       <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1>Thanks for your order!</h1>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      </div>
    );
  }
}




     