import React, { useRef, useState } from 'react';
import { FormGroup, Label, Input, Div } from 'reactstrap';
import classes from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const submitHandler = (e) => {
    setSubmitted(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('임시', '템플렛키', form.current, '키').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <>
      {submitted ? (
        <>
          <div className={classes.submittedForm}>
            이메일 전송이 완료되었습니다
          </div>
        </>
      ) : (
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
          <Input type="submit" value="제출" onClick={submitHandler} />
        </form>
      )}
    </>
  );
};

export default Contact;
