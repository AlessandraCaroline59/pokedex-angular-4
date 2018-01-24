import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from "./shared";
import { ListarItemsComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ListarItemsComponent
  ],
  providers: [
    ItemService
  ]
})
export class ItemsModule { }
