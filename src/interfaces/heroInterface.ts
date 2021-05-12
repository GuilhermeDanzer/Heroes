import { RouteComponentProps } from 'react-router-dom';
export interface HeroOnList {
    id: number;
    name: string;
    description: string;
    thumbnail: {path:string,extension:string};
    comics: {
        items: [
        {name:string}
        ]
    };
    urls: [{
        type: string,
        url:string
    }]
}
export interface HeroList {
    heroes: [],
    pathLink?:string
}
