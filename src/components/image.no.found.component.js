import React from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ImageNoFound = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Oh, no. Images not found.</Alert.Heading>
      <p>There is no photo with this key word. Try some one alse.</p>
      <hr />
      <p className="mb-0">Example: cats, summer, ice cream.</p>
    </Alert>
  );
};

export default ImageNoFound;
