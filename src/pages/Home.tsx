import React, { useState, useContext } from 'react';
import {Context as HeroContext} from '../context/HeroesContext'
import { SearchBox } from '../components/SearchBox'
import { Title } from '../components/Title'
import { WrapperFlex } from '../components/Wrapper'
import {HeroOnList} from '../interfaces/heroInterface'
const Home = () => {
  const [pesquisa, setPesquisa] = useState('Thor')
  const { state, getHeroes } = useContext(HeroContext)
  
  const handlechanger = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value)
  }

  return (
    <WrapperFlex >
      <Title size='3rem'>MYSUPERHERO</Title>
      <SearchBox placeholder="Spiderman"value={pesquisa} onChange={handlechanger} onKeyPress={(event) => {
        if (event.key === 'Enter') {
          getHeroes({nome:pesquisa})
        }
      }} />
     {state.data.map((element:HeroOnList) => {
       console.log(element)
       return (
         <>
           <p>{ element.name}</p>
         </>
       )
      })}
     
    </WrapperFlex>
  )
}
export default Home;
