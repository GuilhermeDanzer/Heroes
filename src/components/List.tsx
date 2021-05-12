import styled from "styled-components";
import { ListProps } from "../interfaces/componentsInterface";

export const List = styled.ul<ListProps>`
  padding-left: ${(props) => (props.padding ? props.padding : "0px")};
`;
