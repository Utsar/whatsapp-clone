import styled from 'styled-components';

import {Form,Button,Col,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Form,Button,Col,Row,Alert} from 'react-bootstrap'
import {Link,Redirect} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios'

const FormContainer = styled.div`

max-width:400px;
margin:3rem auto 0 auto;
`
const handleLogin=(e)=>{
    e.preventDefault()


}
const Login = () => {
const SignUp = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    // const [phone,setPhone] = useState("")
const [password,setPassword] = useState("")
    const [password,setPassword] = useState("")
    // const [confirmPassword,setConfirmPassword] = useState("")
    const[error,setError] = useState(false)

function handleSignUp(){
    <Redirect push to="/"/>
}

function authenticate(){
    try{
        axios.post("http://localhost:3030/api/v1/user/register",{
                name:name,
                email:email,
                password:password
            },{withCredentials:true}).then((res)=>{
            if(res && res.status === 201){
           
            handleSignUp()
            console.log("Account created successfully")
            }else{
                setError(true)
            }
        })
    }catch(err){
                console.log(err)
                setError(true)
            }
}

    return ( 
        <FormContainer className="px-3 px-md-0 mb-3">
                <Form>
                    <Row>
                        <Col >
                       
                        {error && <Alert variant="warning"><small>{`An error occurred , please try again later.`}</small></Alert>}
                            <Form.Group>
                                <h3>Sign Up</h3>
                                <h3>Sign Up</h3>  
                                <p style={{color:"black" }}>Have an account already?<Link to="/" style={{color:"#00E676"}}> Login</Link></p>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </Form.Group>
                        </Col>

                        <Col>
                        <Col sm={12} md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </Form.Group>
                        </Col>
                    </Row>
                  

                    <Row>
                        <Col>
                        <Col sm={12} md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)}  required/>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Col sm={12} md={6}>
                            <Form.Group>
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control type="password" placeholder="Re-enter password"/>
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
                 <Button className=" d-block ms-auto mt-3 loginBtn" style={{border:"none",backgroundColor:"black"}} onClick={()=>handleLogin()}  type="submit">Sign Up</Button>
                 <Button className=" d-block ms-auto mt-3 loginBtn" style={{border:"none",backgroundColor:"black"}} onClick={()=>authenticate()}>Sign Up</Button>
            </FormContainer>
     );
}
 
export default Login;