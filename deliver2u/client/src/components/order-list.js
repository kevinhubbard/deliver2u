import _ from 'lodash';
import React from 'react';
import OrderListHeader from './order-list-header.js';
import OrderListItem from './order-list-item.js';


export default class OrderList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'order');

    //lodash method to get all of the todos in props.todos
    return _.map(this.props.order,

      //give each todo item a key so that React can iterate over it,
      //return a TodosListItem component for each todo in the todos array
      (order, index) => <OrderListItem key={index}

      //spread syntax, still figuring out exactly how this works. 
      {...order} {...props} />)
  }

//render the result of renderItems() in a table, along with the
//todosListHeader component at the top.
  render() {
    return (
      <table className="table">
        <OrderListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
