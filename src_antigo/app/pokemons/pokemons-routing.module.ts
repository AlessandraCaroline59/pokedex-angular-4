import { Routes } from '@angular/router';
import { ListarPokemonComponent } from './listar';
import { PokemonDetailsComponent } from './listar/pokemon-details';

export const PokemonRoutes: Routes = [
    {
        path: 'pokemons',
        redirectTo: 'pokemons/list'
    },
    {
        path: 'pokemons/list',
        component: ListarPokemonComponent
    },
    {
        path: 'pokemons/list/details',
        component: PokemonDetailsComponent
    },
];
