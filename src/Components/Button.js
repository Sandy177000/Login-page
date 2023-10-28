import styled from "styled-components";

const Button = styled.button`
    margin-top:3rem;
    width: 13rem;
    height: 30px;
    background-color: rgb(109,39,255);
    border:none;
    border-radius: 6px;
    font-size: 15px;
    color:white;
    &:hover{
      box-shadow: 2px 2px 18px rgba(120,39,255,0.5);
    }
    @media only screen and (max-width: 600px) {
      margin-top:1rem;
      width:12rem;
    }
`

export default Button;