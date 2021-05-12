import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "../components/Icons";
import { List } from "../components/List";
import { Titulo } from "../components/Texts";
import { WrapperFlex } from "../components/Wrapper";
import { Context as HeroesContext } from "../context/HeroesContext";
import { LeftColumn } from "./Heroes";

const Historico = () => {
  const { state } = useContext(HeroesContext);
  console.log(state);
  return (
    <WrapperFlex flexDirection="column">
      <LeftColumn>
        <Link to="/">
          <Arrow size="15px" />
        </Link>
        <Titulo size="32px">Heróis Pesquisados</Titulo>
        <List padding="40px">
          {state.historico.map((hero: string) => {
            return (
              <li>
                <Titulo>{hero}</Titulo>
              </li>
            );
          })}
        </List>
      </LeftColumn>
    </WrapperFlex>
  );
};
export default Historico;
