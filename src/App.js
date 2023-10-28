import styled from "styled-components";
import './App.css';
import Button from "./Components/Button";
import Label from "./Components/Label";
import Links from "./Components/Links";
import Container from "./Components/Container";
import Input from "./Components/Input";

function App() {
  return (
    <MainContainer>
    <Container style={{paddingTop:"3rem"}}>
       <Head>Login</Head>

       <Label >Login ID</Label>
       <Input placeholder="Enter Login ID"></Input>
       
       <Label>Password</Label>
       <Input id="password" type="password" placeholder="Enter Password"></Input>

       <Container1 >
          <Container2>
             <CheckBox type="checkbox"></CheckBox> 
             <Label1>Remember Me</Label1>
          </Container2>
          
          <Container2 style={{justifyContent:"right",marginRight:"5px"}}>
             <Label1> <Links href="#">Change Password</Links></Label1>
          </Container2>
       </Container1>

       <Container1>
          <Container2>
             <CheckBox type="checkbox"></CheckBox> 
             <Label1>Agree to <Links href="#">Terms & Conditions</Links></Label1>
          </Container2>
       </Container1>
       <br/>

       <Button>
        Login
       </Button>

       <br/>
       <Label1> Don't have an account? <Links href="#">Register Here</Links></Label1>  
    </Container>
    
    </MainContainer>
  );
}




const Label1 = styled.div`
   font-size:11px;
`

const MainContainer = styled.form`
   @import url('https://fonts.googleapis.com/css2?family=Playfair:wght@700&family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,400&display=swap');
   font-family: Poppins,sans-serif;
   position:relative;
   background-color: rgba(0,0,0,0.105);
   width:100vw;
   height:100vh;
   display:flex;
   justify-content:center;
`

const CheckBox = styled.input`
   cursor:pointer;
`

const Container1 = styled(Container)`

    background-color: transparent;
    backdrop-filter:none;
    width:75%;
    height:30px;
    border:none;
    display:flex;
    position:relative;
    flex-direction:row;
    margin-top:0rem;
    justify-content:space-between;  
    box-shadow: none;
`


const Container2 = styled(Container1)`
    
    justify-content:left;
`

const Head = styled.div`
    margin-bottom:3rem;
    font-weight:600;
    font-size:25px;
`

export default App;
