import React from "react";
import { Text, Titulo } from "../components/Texts";
import { WrapperFlex } from "../components/Wrapper";
import { HeroOnList } from "../interfaces/heroInterface";
import { Link, RouteComponentProps } from "react-router-dom";
import { IconHero } from "../components/HeroesList";
import styled from "styled-components";
import { Arrow } from "../components/Icons";
import { List } from "../components/List";

export const LeftColumn = styled.div`
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  flex: 3;
`;
const RightColumn = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 20px;
`;

const Heroes: React.FC<RouteComponentProps> = ({ ...props }) => {
  const { hero } = props.location.state as { hero: HeroOnList };

  console.log(hero);
  return (
    <WrapperFlex>
      <LeftColumn>
        <Link to="/">
          <Arrow size="15px" />
        </Link>

        <Titulo size="52px">{hero.name}</Titulo>
        <Titulo>Descrição</Titulo>
        <Text size="32px">{hero.description}</Text>
        <Titulo>Comics em que aparece</Titulo>
        <List padding="40px">
          {hero.comics.items.map((comic) => {
            return (
              <li>
                <Text>{comic.name}</Text>
              </li>
            );
          })}
        </List>
      </LeftColumn>

      <RightColumn>
        <div>
          <IconHero
            borderRadius="10%"
            src={`${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`}
          />
        </div>
        {hero.urls.map((url) => {
          return (
            <>
              <a rel="noreferrer" target="_blank" href={url.url}>
                <Titulo> {url.type}</Titulo>
              </a>
            </>
          );
        })}
      </RightColumn>
    </WrapperFlex>
  );
};
export default Heroes;
