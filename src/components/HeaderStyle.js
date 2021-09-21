import styled from 'styled-components';


export const Box = styled.div`
  background-color: aliceblue;
  position: absolute;
  top:  0;
  width: 100%;
  height: 90px;
`;

export const HeaderLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;