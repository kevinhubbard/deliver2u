import React from 'react';

export default class OrderListHeader extends React.Component {
  render() {
    //task and action header names. simple component. 
    return (
        <thead>
          <tr>
            <th>Items</th>
            <th>Update</th>
          </tr>
        </thead>
    );
  }
}
