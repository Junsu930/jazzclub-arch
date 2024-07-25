import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setLoggedin] = useState(false);

  const loginHandler = () => {};

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form onSubmit={loginHandler}>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={(ev) => setUsername(ev.currentTarget.value)}
                  />
                </FormGroup>
                <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    onChange={(ev) => setPassword(ev.currentTarget.value)}
                  />
                </FormGroup>
                <Button type="submit" color="primary" className="m-2">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
          <Card className="mt-5"></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
