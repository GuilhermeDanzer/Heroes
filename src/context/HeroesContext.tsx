import { createDataContext } from "./createDataContext";
import { Dispatch } from "react";
import baseUrl from "./baseUrl";
interface Action {
  type: string;
  payload: any;
}

interface GetHeroesProps {
  nome: string;
}
interface GetHeroesData {
  data: {
    results: [];
  };
}
const heroesReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "getHeroes":
      return { ...state, data: action.payload };
    case "saveHeroes":
      return { ...state, historico: [...state.historico, action.payload] };
  }
};
const getHeroes = (dispatch: Dispatch<Action>) => {
  return async ({ nome }: GetHeroesProps) => {
    const response = await baseUrl.get<GetHeroesData>(
      `/characters?nameStartsWith=${nome}`
    );

    dispatch({ type: "getHeroes", payload: response.data.data.results });
  };
};

const saveHeroes = (dispatch: Dispatch<Action>) => {
  return (nome: String) => {
    dispatch({ type: "saveHeroes", payload: nome });
  };
};
export const { Context, Provider } = createDataContext(
  heroesReducer,
  { getHeroes, saveHeroes },
  { data: [], historico: [] }
);
