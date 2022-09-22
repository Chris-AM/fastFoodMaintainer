import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/' },
        { title: 'Ingredientes', url: 'ingredients' },
        { title: 'Productos', url: 'products' },
        { title: 'Menus', url: 'menus' },
        { title: 'Ordenes', url: 'orders' },
        { title: 'Administrar Usuarios', url: 'users' },
        { title: '', url: 'daily-sales' },
      ],
    }
  ];

  constructor(){}
}
