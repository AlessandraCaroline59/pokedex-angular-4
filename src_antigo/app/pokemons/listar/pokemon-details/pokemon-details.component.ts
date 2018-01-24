import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../shared';
import { PokemonAbility } from "../../shared/pokemonAbility.model";
import { PokemonMove } from "../../shared/pokemonMove.model";
import { PokemonSprite } from "../../shared/pokemonSprite.model";
import { PokemonStat } from "../../shared/pokemonStat.model";
import { PokemonType } from "../../shared/pokemonType.model";
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

   pokemon: Pokemon;
   name = '';
   image = '';
   abilities: PokemonAbility[];
   moves: PokemonMove[];
   stats: PokemonStat[];
   types: PokemonType[];
   weight: number;
   height: number;
   base_xp: number;

  constructor(private pokemonService: PokemonService,
  private http: Http) { }

  ngOnInit() {
    this.pokemonService.getPokemonDetails().subscribe(
      (res: Response) => {
        this.pokemon = res.json();
        this.name = this.pokemon.name
        this.image = this.pokemon.sprites.front_default;
        this.abilities = this.pokemon.abilities;
        this.moves = this.pokemon.moves;
        this.stats = this.pokemon.stats;
        this.types = this.pokemon.types;
        this.weight = this.pokemon.weight;
        this.height = this.pokemon.height;
        this.base_xp = this.pokemon.base_experience;
        console.log(this.pokemon)
      })
  }

}
