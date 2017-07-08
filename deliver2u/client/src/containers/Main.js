// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("../components/Form");
var Results = require("../components/Results");

import { browserHistory, Router, Link } from 'react-router';


// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { searchTerm: "", results: "" };
  },



  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container text-center">
        <div className="row text-center">
          <div className="jumbotron text-center">
            <h2 className="text-center">Deliver2U</h2>
            <p className="text-center">
              <em>An easy delivery app for everyday items!</em>
            </p>
          </div>

          <div className="col-md-6 text-center">

            <Form setTerm={this.setTerm} />
            <Results address={this.state.results} />

          </div>

          

        </div>

        <span className="text-center">
       <ul className="list-group" role="nav">
          <li className="list-group-item"><Link to="/order">Next</Link></li>
        </ul>
      </span>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
