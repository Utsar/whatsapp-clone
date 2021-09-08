import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import {Form,Button,Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios'

const FormContainer = styled.div`

max-width:400px;
margin:3rem auto 0 auto;
`

// Upon login with valid credentials client receives cookie, and this cookie is used to authorize client to do some stuff. 
// If you’re logged as Britney you can’t send a message as Whitney. Because you having Britney’s token. 
// And the token itself is just an encoded user object. So server decodes it and that’s how you’re receiving current user object upon GET /me
// It simply decodes the token from your cookie, which is automatically attached as long as http request sent with withCredentials:true


const Login = () => {
    const url = process.env.REACT_APP_BACKEND_URL
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    function authenticate (){
        try{
        axios.post(`${url}/user/login`,{
                email:email,
                password:password
            },{withCredentials:true}).then((res)=>{
            if(res && res.status === 200){
            console.log("Logged in successfully")
            //redirect to main application

            try{
                axios.get(`${url}/user/me`,{
                  withCredentials:true //cookies automatically attached with withCredentials
                }).then((res)=>console.log(res))
            }catch(err){
                console.log(err)
            }
    
        }
           else {
                setError(true)
            }})
        }catch(err){
                console.log(err)
                setError(true)
            }
    }


    return ( 
        <animated.div style={props}>
            <FormContainer className="px-3 px-md-0 mb-3">

                    <Form>
                        {error && <Alert variant="warning"><small>{`No account exist for ${email}, please sign up for a new account.`}</small></Alert>}
                        <h3>Login</h3>
                        <p style={{color:"black" }}>Dont have an account?<Link to="/register" style={{color:"#00E676"}}> Sign Up</Link></p>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password}  onChange={(e)=>setPassword(e.target.value)} required/>
                            <p className="mt-2" style={{color:"black"}}>Forgot password?<Link style={{color:"#00E676"}}> Request a new one here</Link></p>
                        </Form.Group>
                    </Form>
                    <Button className=" mt-3 loginBtn" style={{border:"none",backgroundColor:"black"}} onClick={()=>authenticate()}>Sign In</Button>
                </FormContainer>
            </animated.div>
     )
    }
 
export default Login;