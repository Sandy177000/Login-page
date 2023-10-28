import styled from "styled-components";


const Input = styled.input`
   width: 23rem;
   height: 20px;
   background-color:transparent;
   border:1px rgba(0,0,0,0.3) solid;
   border-radius: 3px;
   font-size:12px;
   margin: 3px 0 1rem 0;
   @media only screen and (max-width: 600px) {
    width: 14rem;
  }
`

export default Input;