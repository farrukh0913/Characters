export interface ICharacter {
    id: number;
    name: string;
    created: string;
    episode: string[];
    gender: string;
    species: string;
    status: string;
    type: string;
    url: string;
    image: string;
    location: {
        name: string;
        url: string;
    }
    origin: {
        name: string;
        url: string;
    }
}