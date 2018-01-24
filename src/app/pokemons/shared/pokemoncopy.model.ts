import { PokemonAbility } from "./pokemonAbility.model";
import { PokemonMove } from "./pokemonMove.model";
import { PokemonSprite } from "./pokemonSprite.model";
import { PokemonStat } from "./pokemonStat.model";
import { PokemonType } from "./pokemonType.model";

export class Pokemon{

    constructor(
        public id: number,
        public name: string,
        public base_experience: number,
        public height: number,
        public is_default: boolean,
        public order: number,
        public weight: number,
        public abilities: [PokemonAbility],
        public moves: [PokemonMove],
        public sprites: [PokemonSprite],
        public stats: [PokemonStat],
        public types: [PokemonType]
    ){}
}