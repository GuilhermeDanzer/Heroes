import React from "react";
import styled from "styled-components";
import { HeroList, HeroOnList } from "../interfaces/heroInterface";
import { Link } from "react-router-dom";
import { IconHeroProps } from "../interfaces/componentsInterface";

const List = styled.ul`
  height: 280px;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const IconHero = styled.img<IconHeroProps>`
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "50%"};
  margin-right: 10px;
  outline: none;
  box-shadow: 6px 5px 6px #cccbcb54;
`;
const TextHeroName = styled.p`
  font-size: 16px;
  cursor: pointer;
`;
export const HeroesList: React.FC<HeroList> = ({ heroes, pathLink }) => {
  return (
    <>
      <List>
        {heroes.map((hero: HeroOnList) => {
          return (
            <Link
              to={{
                pathname: pathLink,
                state: {
                  hero,
                },
              }}
              key={hero.id}
            >
              <ListItem>
                <IconHero
                  src={`${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`}
                />
                <TextHeroName>{hero.name}</TextHeroName>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
};
