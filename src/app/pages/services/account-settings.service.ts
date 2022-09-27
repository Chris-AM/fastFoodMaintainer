import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingsService {

  private themeName = document.querySelector('#theme');

  constructor() { 
    this.setThemeByLocalStorage();
  }

  setThemeByLocalStorage() {
    const defaultDarkTheme = './assets/css/colors/default-dark.css'
    const urlTheme = localStorage.getItem('theme') || defaultDarkTheme;
    this.themeName?.setAttribute('href', urlTheme);
  }

  changeTheme( theme:string ) {
    const themeUrl = `./assets/css/colors/${theme}.css`;
    this.themeName?.setAttribute('href', themeUrl);
    localStorage.setItem('theme', themeUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
  const themeCheck = document.querySelectorAll('.selector');

    themeCheck.forEach( (htmlEl) => {
      htmlEl.classList.remove('working');
      const btnTheme = htmlEl.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.themeName?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        htmlEl.classList.add('working');
      }
    } );
  }

}
