import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Form, Button, Alert, Container, Row} from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
// import { withRouter } from "react-router-dom";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 3rem auto 0 auto;
`;

// Upon login with valid credentials client receives cookie, and this cookie is used to authorize client to do some stuff.
// If you’re logged as Britney you can’t send a message as Whitney. Because you having Britney’s token.
// And the token itself is just an encoded user object. So server decodes it and that’s how you’re receiving current user object upon GET /me
// It simply decodes the token from your cookie, which is automatically attached as long as http request sent with withCredentials:true

const Login = ({history}) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const fade = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });//Animation

  function authenticate(e) {
  
      axios
        .post(
          `${url}/api/v1/user/login`,
          {
            email: email,
            password: password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log("Logged in successfully");
              axios
                .get(`${url}/api/v1/user/me`, {
                  withCredentials: true, //cookies automatically attached with withCredentials
                })
                .then((res) => res.data ? history.push("/chat") : null);
            }
           else {
            setError(true);
          }
        }).catch(() => setError(true));
      }
  

  return (
    <>
    <Container style={{height:"100vh",backgroundImage:"linear-gradient(to top,#00E676 5%,#fff ,#fff ,#fff ,#fff ,#fff  )"}} fluid>
          
    <Row className="py-3 px-3" style={{boxShadow:"0 3px 3px rgba(100,100,100,.3)"}} >
        <div>
        <svg className="d-inline" xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
        <h4 className="d-inline">WhatsApp</h4>
        </div>
    </Row>
   

    <animated.div style={fade}>
      <FormContainer className="px-3 px-md-0 mb-3">
        <Form>
          {error && <Alert variant="warning">
              <small>{`No account exist with the details provided, please sign up for a new account.`}</small>
            </Alert>
          }
          <h3>Login</h3>
          <p style={{ color: "black" }}>
            Dont have an account?
            <Link to="/register" style={{ color: "#00E676" }}>
              {" "}
              Sign Up
            </Link>
          </p>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onKeyDown={(e)=> e.key === "Enter" ? authenticate(e):null} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onKeyDown={(e)=> e.key === "Enter" ? authenticate(e):null} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="mt-2" style={{ color: "black" }}>
              Forgot password?
              <Link style={{ color: "#00E676" }}> Request a new one here</Link>
            </p>
          </Form.Group>
        </Form>
        <Button
          className=" mt-3 loginBtn"
          style={{ border: "none", backgroundColor: "black" }}
          onClick={() => authenticate()}
        >
          Sign In
        </Button>
      </FormContainer>
    </animated.div>
       
</Container>
</>
);
  }

export default withRouter(Login);
