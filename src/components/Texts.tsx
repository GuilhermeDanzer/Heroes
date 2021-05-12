
import styled from "styled-components";
import { TextsProps } from "../interfaces/componentsInterface";

export const Titulo = styled.h1<TextsProps>`
  color: #fff;
  font-weight: 700;
  font-size: ${(p) => (p.size ? p.size : "30px")};
`;
export const Text = styled.p<TextsProps>`
  color: #fff;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: ${(p) => (p.size ? p.size : "16px")};
`;
