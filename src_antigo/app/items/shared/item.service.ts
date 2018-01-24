import { Injectable } from '@angular/core';
import { ItemsModule } from '../items.module';
import { Item } from './';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ItemService {

    constructor(private http: Http) { }

    getData(url: string) {
        return this.http.get(url);
    }
}