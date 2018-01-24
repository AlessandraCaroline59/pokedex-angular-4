import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './shared';
import { ListarPokemonComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './listar/pokemon-details/pokemon-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    ListarPokemonComponent,
    PokemonDetailsComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonsModule { }
