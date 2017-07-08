import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
    <p style = {{fontSize: '25px', color: 'red'}}> this is a test </p>

	<form>
	  <label>
	    Item:
	    <input type="text" name="Customer" />
	  </label> <br />
	  <label>
	    Drop off address:
	    <input type="text" name="Address" />
	  </label> <br />
	  	  <label>
	    Drop off city:
	    <input type="text" name="City" />
	  </label> <br />
	  <label>
	    Drop off state :
	    <input type="text" name="name" />
	  </label> <br />
	  <label>
	    Drop off Zip Code:
	    <input type="text" name="name" />
	  </label> <br />
	  <input type="submit" value="Submit" />
	</form>

  </Card>

);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
  
};

export default Dashboard;
