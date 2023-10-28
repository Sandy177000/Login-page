import styled from "styled-components";


const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color: rgba(256,256,256,0.2);
  border: white 1px solid;
  align-items:center;
  width:500px;
  height:500px;
  margin-top:5rem;
  border-radius:10px;
  z-index:10;
  box-shadow: 13px 10px 16px rgba(100,100,100,0.1);
  @media only screen and (max-width: 600px) {
    width: 320px;
    height: 400px;
  }
`;

export default Container;