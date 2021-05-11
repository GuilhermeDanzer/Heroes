import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
background: #1E222F;
border: 1px solid #313542;
border-radius: 8px;
color:#fff;
font-family: monospace;
outline: none;
font-weight: 700;
font-size: 16px;
width: 343px;
padding:20px;
`



export const SearchBox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({...props }) => {

  return (
    
    <Input {...props} />
    
    )
}
