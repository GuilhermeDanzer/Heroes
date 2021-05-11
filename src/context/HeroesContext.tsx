import { createDataContext } from './createDataContext'
import {Dispatch } from 'react';
import baseUrl from './baseUrl'
interface Action {
  type: string;
  payload: any;
}

interface GetHeroesProps {
  nome:string
}
interface GetHeroesData {
  data: {
    results: []
  }
}
const heroesReducer = (state:any, action: Action) => {

  switch (action.type) {

    case 'getHeroes':
      return {...state,data:action.payload}

  }

}
const getHeroes = (dispatch:Dispatch<Action>)  =>{
  return async ({ nome }: GetHeroesProps) => {
    
    const response = await baseUrl.get<GetHeroesData>(`/characters?nameStartsWith=${nome}`)
    
   dispatch({type:'getHeroes', payload:response.data.data.results})
  }
}

export const { Context, Provider } = createDataContext(
  heroesReducer,
  { getHeroes },
  {data:[]})