import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../Responsive";
import {useSelector} from "react-redux"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../Redux/apiCalls";
import localStorage from "redux-persist/es/storage";
import { logout } from "../Redux/userSlice";
const Container = styled.div`
    height:60px;
    ${mobile({height:"50px"})}
`;

const Wrapper=styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:"10px 0px"})}
`;

const Left=styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;

const Language=styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:"none"})}
`;

const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;

const Input=styled.input`
    border:none;
    ${mobile({width:"50px"})}
`; 

const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`;
const Center=styled.div`
    flex:1;
    text-align:center;
`;
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    ${mobile({flex:"2",justifyContent:"center"})}
`;

const MenuItem = styled.div`
    font-size:14;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;


const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    let username = useSelector(state=>state.user.currentUser.username);
    
    const dispatch=useDispatch();
    const handleLogout = (e) =>{
        dispatch(logout(null));
    }
    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <SearchIcon sx={{color:"gray",fontSize:16}}></SearchIcon>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TMarket</Logo>
                </Center>
                <Right>
                    {username ? <p>{username}</p> :   <Link to="/register">
                    <MenuItem>REGISTER</MenuItem>
                    </Link>}
                  {!username ?  <Link to="/login">
                    <MenuItem>SIGN IN</MenuItem>
                    </Link> : <MenuItem onClick={handleLogout}>Logout</MenuItem>}
                   
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                           <ShoppingCartOutlinedIcon color="action" />
                    </Badge>
                    </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
     );
}


export default Navbar;