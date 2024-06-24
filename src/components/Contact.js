import React, { useRef } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import classes from './Contact.module.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'junsu930',
        'template_xblgbil',
        form.current,
        'VCIg1v0wIG18N1ZTD',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormGroup>
        <Label for="email">이메일</Label>
        <Input id="email" name="user_email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="message">문의사항</Label>
        <Input
          id="message"
          name="message"
          type="textarea"
          className={classes.contactArea}
        />
      </FormGroup>
      <input type="submit" value="제출" />
    </form>
  );
};

export default Contact;
