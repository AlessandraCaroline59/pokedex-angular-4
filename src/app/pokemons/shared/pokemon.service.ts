import { Injectable } from '@angular/core';
import { PokemonsModule } from '../pokemons.module';
import { Pokemon } from "./";
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PokemonService {

    pokemonDetailUrl = '';

    constructor(private http: Http) { }

    getData(url: string) {
        return this.http.get(url);
    }

    getPokemonDetails() {
        return this.http.get(this.pokemonDetailUrl);
    }

    setPokemonDetailsUrl(url: string) {
        this.pokemonDetailUrl = url;
    }
}