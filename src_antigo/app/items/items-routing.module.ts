import { Routes } from '@angular/router';
import { ListarItemsComponent } from './listar';

export const ItemRoutes: Routes = [
    {
        path: 'items',
        redirectTo: 'items/list'
    },
    {
        path: 'items/list',
        component: ListarItemsComponent
    },
];
