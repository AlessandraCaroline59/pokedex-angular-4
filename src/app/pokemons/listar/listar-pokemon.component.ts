import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../shared';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-listar-pokemon',
  templateUrl: './listar-pokemon.component.html',
  styleUrls: ['./listar-pokemon.component.css']
})
export class ListarPokemonComponent implements OnInit {

  pokemons = '';
  firstUrl = 'https://pokeapi.co/api/v2/pokemon/';
  counter = 0;

  constructor(private pokemonService: PokemonService,
    private _router: Router) { }

  ngOnInit() {
    this.pokemonService.getData(this.firstUrl).subscribe(
      (res: Response) => {
        this.pokemons = res.json();
        console.log(this.pokemons)
      })
  }

  nextPokemonsPage(url: string) {
    this.pokemonService.getData(url).subscribe(
      (res: Response) => {
        this.pokemons = res.json();
        this.counter += 20;
        console.log(this.pokemons)
      })
  }

  previousPokemonsPage(url: string) {
    this.pokemonService.getData(url).subscribe(
      (res: Response) => {
        this.pokemons = res.json();
        this.counter -= 20;
        console.log(this.pokemons)
      })
  }

  getPokemonDetails(url: string) {
    this.pokemonService.setPokemonDetailsUrl(url);
    this._router.navigate(['/pokemons/list/details']);
  }
}
