import { Component, OnInit } from '@angular/core';
import { Menus } from 'src/app/models/menus.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  public menus: Menus[] = [];

  constructor(
    private readonly menusService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenus()
  }

  public getMenus(){
    this.menusService.getMenus().subscribe({
      next: (menus: Menus[]) => {
        console.log('🚀 debug menus ', menus)
        this.menus = menus;
      }
    })
  }

}
