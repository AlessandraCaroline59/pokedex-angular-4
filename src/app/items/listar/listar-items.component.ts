import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../shared';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-listar-items',
  templateUrl: './listar-items.component.html',
  styleUrls: ['./listar-items.component.css']
})
export class ListarItemsComponent implements OnInit {

  items = '';
  firstUrl = 'https://pokeapi.co/api/v2/item/';
  counter = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getData(this.firstUrl).subscribe(
      (res: Response) => {
        this.items = res.json();
        console.log(this.items)
      })
  }

  nextItemsPage(url: string) {
    this.itemService.getData(url).subscribe(
      (res: Response) => {
        this.items = res.json();
        this.counter += 20;
        console.log(this.items)
      })
  }
  
  previousItemsPage(url: string) {
    this.itemService.getData(url).subscribe(
      (res: Response) => {
        this.items = res.json();
        this.counter -= 20;
        console.log(this.items)
      })
  }
}
