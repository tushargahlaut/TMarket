import styled from "styled-components";
import { mobile } from "../Responsive";
import { useState } from "react";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const Container =styled.div`
    width:100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size:cover;
    display:flex;
    align-items: center;
    justify-content:center;

`;

const Wrapper=styled.div` 
    width:40%;
    padding:20px;
    background-color: white;
    ${mobile({width:"75%"})}
`;


const Form = styled.form` 
    display:flex;
   flex-direction:column;
`;

const Title=styled.h1`
    font-size: 24px;
    font-weight:300;
`;

const Input=styled.input` 
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding:10px;
`;



const Button=styled.button` 
    width:40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`;

const Link=styled.a` 
        margin:5px 0;
        font-size: 12px;
        text-decoration: underline;
        cursor:pointer;
`;

const Error = styled.span`
    color:red;
`

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch(); 
    const {isFetching,error} = useSelector((state)=>state.user);
    const handleClick = (e) =>{
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return (
        <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form> 
                <Input onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <Button disabled={isFetching} onClick={handleClick}>LOGIN</Button>
               {error && <Error>SOMETHING WENT WRONG</Error>}
                <Link>FORGOT YOUR PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
      );
}
 
export default Login;