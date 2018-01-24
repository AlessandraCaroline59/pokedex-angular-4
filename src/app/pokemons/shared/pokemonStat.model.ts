import { Stat } from "./stat.model";

export class PokemonStat {

    constructor(
        public base_stat: number,
        public effort: number,
        public stat: [Stat]
    ){}
}