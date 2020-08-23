import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <Form onSubmit={handlerSubmitForm} className="search-form-gallery mb-3">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter any key word"
          aria-label="Enter any key word"
          aria-describedby="basic-addon2"
          onChange={(e) => setText(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="info" type="submit">
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default ImageSearch;
