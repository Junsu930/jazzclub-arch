import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">이메일</Label>
        <Input id="exampleEmail" name="email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">문의사항</Label>
        <Input
          id="exampleText"
          name="text"
          className={classes.contactArea}
          type="textarea"
        />
      </FormGroup>
      <Button>제출</Button>
    </Form>
  );
};

export default Contact;
