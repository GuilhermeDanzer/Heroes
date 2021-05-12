import styled from "styled-components";
import { TextsProps } from "../interfaces/componentsInterface";

export const Titulo = styled.h1<TextsProps>`
  color: #fff;
  font-weight: 700;
  font-size: ${(props) => (props.size ? props.size : "30px")};
`;
export const Text = styled.p<TextsProps>`
  color: #fff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => (props.size ? props.size : "16px")};
`;
