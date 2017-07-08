import React from 'react';

export default class OrderListHeader extends React.Component {
  render() {
    //task and action header names. simple component. 
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Items</th>
            <th className="text-right">Update</th>
          </tr>
        </thead>
       </table> 
    );
  }
}
