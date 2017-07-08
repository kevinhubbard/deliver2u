import React from 'react';

import CreateOrder from '../components/create-order';
import OrderList from '../components/order-list';
import ModalAlert from '../components/modal';

import { browserHistory, Router, Link } from 'react-router';

//hardcoded data for this tutorial. all of our data will be in this array.
const order = [
  {
    task: 'Coors Light 12-pack',
    isCompleted: false
  },
  {
    task: 'Newport 100s',
    isCompleted: true
  }
]

//initialize our App component. add it onto the React component object.
class Order extends React.Component {
  constructor(props) {
    super(props);

    //set our todos array in state. this could be a db query if this was full stack.
    this.state = {
      order
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
        <h1 className="text-center">Your Current Order</h1>
        <br />
        <CreateOrder order={this.state.order} createTask={this.createTask.bind(this)} />
          <OrderList
            order={this.state.order}
            toggleTask={this.toggleTask.bind(this)}
            saveTask = {this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />

          <ul className="list-group" role="nav">
          <li className="list-group-item"><Link to="/main">Back</Link></li>
         </ul>
          
          <ul className="list-group" role="nav">
          <li className="list-group-item"><Link to="/confirm">Place Your Order</Link></li>
          </ul>

          </div>
        </div>
      </div>
    );
  }

  //the above render() renders the whole app! this is where it all happens.
  //line 35 assigns the todos array in state to the variable todos
  //36, 37, 38 all call their respective methods, binding this to them
  //this is bound to transfer accessibility of state object to called methods.

  toggleTask(task) {
    // when a todo task is clicked on, use _.find lodash method to find
    // the object in the todos array where the task names match
    const foundOrder = _.find(this.state.order, order => order.task === task)

    //change the color of the todo based on its completion
    foundOrder.isCompleted = !foundOrder.isCompleted;
    this.setState({order: this.state.order})
  }

  //this function pushes a task into the todos array with an isCompleted value of false
  createTask(task) {
    this.state.order.push({
      task,
      isCompleted: false
    })

    //set state with updated todos array
    this.setState({ order: this.state.order})
  }

  //this function takes in the unedited and edited tasks, finds them and updates the todos array
  saveTask(oldTask, newTask) {
    const foundOrder = _.find(this.state.order, order => order.task === oldTask)
    foundOrder.task = newTask;

    //set state with updated todos array
    this.setState({ order: this.state.order})
  }

  //this function removes taskToDelete from the todos array
  deleteTask(taskToDelete) {
    _.remove(this.state.order, order => order.task === taskToDelete)
    this.setState({order: this.state.order});
  }

}; //closing bracket

export default Order;




