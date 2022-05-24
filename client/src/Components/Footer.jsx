import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../Responsive";

const Container=styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`;
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
    margin:20px 0px;
`;
const SocialContainer=styled.div`
    display:flex;
`;
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color}; 
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right:20px;
`;
const Center=styled.div`
    flex:1;    
    padding:20px;
    ${mobile({display:"none"})}
`;

const Title=styled.h3`
    margin-bottom:30px;
`;

const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem=styled.li`
    width:50%;
    margin-bottom: 10px;
`;


const Right=styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment=styled.img`
    width:100%;
`;

const Footer = () => {
    return (  
<Container>
    <Left>
            <Logo>TUSHAR</Logo>
            <Desc>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                        <FacebookIcon> </FacebookIcon>
                </SocialIcon >
                <SocialIcon color="e4405f">
                        <InstagramIcon> </InstagramIcon>
                </SocialIcon>
                <SocialIcon color="55acee">
                        <TwitterIcon> </TwitterIcon>
                </SocialIcon>
            </SocialContainer>
    </Left>
    <Center>
            <Title>Useful Links</Title>
            <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
            </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <MapIcon sx={{marginRight:"10px"}}></MapIcon>
             New Delhi 110011
        </ContactItem>
        <ContactItem>
            <PhoneIcon sx={{marginRight:"10px"}}></PhoneIcon>
            +91 987654321
        </ContactItem>
        <ContactItem>
            <EmailIcon sx={{marginRight:"10px"}}></EmailIcon>
            contact@tushar.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>
</Container>

    );
}
 
export default Footer;