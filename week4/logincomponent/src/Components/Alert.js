import React from 'react'
import {Alert} from "react-bootstrap"
function AlertDismissibleExample({show,setShow}) {
  /////this section will be displayed if the user doesn't type in everything needed to log-in
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
          please check your information and try again
          </p>
        </Alert>
      );
    }
    return <></>;
  }
  
export default AlertDismissibleExample