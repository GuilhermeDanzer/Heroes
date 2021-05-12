import React, { useState, useContext } from "react";
import { Context as HeroContext } from "../context/HeroesContext";
import { SearchBox } from "../components/SearchBox";
import { Text, Titulo } from "../components/Texts";
import { WrapperFlex } from "../components/Wrapper";
import { HeroesList } from "../components/HeroesList";

import { Link } from "react-router-dom";

const Home = () => {
  const [pesquisa, setPesquisa] = useState("");
  const { state, getHeroes, saveHeroes } = useContext(HeroContext);

  const handlechanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value);
  };

  console.log(state);
  return (
    <WrapperFlex justifyContent="space-around" flexDirection="column">
      <Titulo size="3rem">MYSUPERHERO</Titulo>
      <SearchBox
        placeholder="Pesquisar"
        value={pesquisa}
        onChange={handlechanger}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            getHeroes({ nome: pesquisa });
            saveHeroes(pesquisa);
          }
        }}
      />
      <Link to="/historico">
        <Text>Histórico</Text>
      </Link>
      <HeroesList heroes={state.data} pathLink="/Heroes" />
    </WrapperFlex>
  );
};
export default Home;
