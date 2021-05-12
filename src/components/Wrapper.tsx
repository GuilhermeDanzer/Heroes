
import styled from 'styled-components'
import { WrapperFlexProps } from '../interfaces/componentsInterface'

export const WrapperFlex = styled.div<WrapperFlexProps>`
height:100vh;
display:flex;
justify-content:${props=>props.justifyContent?props.justifyContent:'center'};
align-items:${props=>props.alignItems?props.alignItems:'center'};
flex-direction:${props=>props.flexDirection?props.flexDirection:'row'};
&:before{
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;
  background-image:url(${props=>props.backgroundImage?props.backgroundImage:'/deadpool.jpg'});
  filter:${props=>props.filter?props.filter:'blur(2px)'};
  background-position: center;
  background-size:cover;
}
`





