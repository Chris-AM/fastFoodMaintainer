import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Mantenedor',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Ingredientes', url: 'ingredients' },
        { title: 'Productos', url: 'products' },
        { title: 'Menus', url: 'menus' },
        { title: 'Ordenes', url: 'orders' },
        { title: 'Administrar Usuarios', url: 'users' },
        { title: 'Ventas Diarias', url: 'daily-sales' },
      ],
    }
  ];

  constructor(){}
}
