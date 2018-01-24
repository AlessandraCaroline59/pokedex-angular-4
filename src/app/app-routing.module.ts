import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PokemonRoutes} from './pokemons/pokemons-routing.module';
import {ItemRoutes} from './items/items-routing.module';

export const routes: Routes = [
    ...PokemonRoutes,
    ...ItemRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule { 

}

