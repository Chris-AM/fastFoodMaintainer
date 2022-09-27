import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  public themeName = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    this.setThemeByLocalStorage()
  }
  
  setThemeByLocalStorage() {
    const defaultDarkTheme = './assets/css/colors/default-dark.css'
    const urlTheme = localStorage.getItem('theme') || defaultDarkTheme;
    this.themeName?.setAttribute('href', urlTheme);
  }

}
