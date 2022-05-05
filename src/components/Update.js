import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const UpdateForm = ({ ele }) => {
  return (
    <div className="form-container">
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter Blog Title"
            type="title"
            value={ele.title}
            // onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="content">Content</label>
          <Input
            id="content"
            name="content"
            type="textarea"
            placeholder="Enter Your Content"
            value={ele.content}
            // onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default UpdateForm;
