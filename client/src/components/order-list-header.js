import React from 'react';

export default class OrderListHeader extends React.Component {
  render() {
    //task and action header names. simple component. 
    return (
        <thead>
          <tr>
            <th>Order</th>
            <th>Action</th>
          </tr>
        </thead>
    );
  }
}
