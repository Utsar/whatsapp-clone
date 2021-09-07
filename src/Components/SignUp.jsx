import styled from 'styled-components';

import {Form,Button,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react';

const FormContainer = styled.div`

max-width:400px;
margin:3rem auto 0 auto;
`
const handleLogin=(e)=>{
    e.preventDefault()


}
const Login = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    // const [phone,setPhone] = useState("")
const [password,setPassword] = useState("")

    return ( 
        <FormContainer className="px-3 px-md-0 mb-3">
                <Form>
                    <Row>
                        <Col >
                            <Form.Group>
                                <h3>Sign Up</h3>
                                <p style={{color:"black" }}>Have an account already?<Link to="/" style={{color:"#00E676"}}> Login</Link></p>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        </Col>
                    </Row>
                  

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Re-enter password"/>
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
                 <Button className=" d-block ms-auto mt-3 loginBtn" style={{border:"none",backgroundColor:"black"}} onClick={()=>handleLogin()}  type="submit">Sign Up</Button>
            </FormContainer>
     );
}
 
export default Login;