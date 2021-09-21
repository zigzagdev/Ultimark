import styled from 'styled-components';

export const Box = styled.div`
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 260px;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 8px;
`;

export const Row = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill,
  minmax(185px, 1fr));
  grid-gap: 20px;
  margin-bottom: 20px;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;
text-align: right;
margin-right:20px;  
`;

export const Heading = styled.p`
font-size: 19px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
text-align: right;
`;
