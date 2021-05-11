import React from 'react'
import styled from 'styled-components'


interface TitleProps {
  size?: string

}
const Titulo = styled.h1<TitleProps>`
color:#fff;
font-weight: 700;
font-size: ${p=>p.size?p.size:'30px'};

`


export const Title: React.FC<TitleProps> = ({ children , size}) => {

  return (
    
    <Titulo size={size}>
      {children}
    </Titulo>
     
      
    
    )
}
