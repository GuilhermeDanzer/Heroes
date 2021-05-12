import styled from "styled-components";
import { ArrowProps } from "../interfaces/componentsInterface";
export const Arrow = styled.i<ArrowProps>`
  border: solid white;
  border-width: 0 ${(props) => (props.size ? props.size : "10px")}
    ${(props) => (props.size ? props.size : "10px")} 0;
  display: inline-block;
  padding: ${(props) => (props.size ? props.size : "10px")};
  transform: rotate(
    ${(props) => (props.direction ? props.direction : "135deg")}
  );
`;
