import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { MESSAGES } from 'src/app/shared/global-messages';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public themeName = document.querySelector('#theme');
  public themeCheck!: NodeListOf<Element>;


  public selectTheme: string = '';
  constructor() { }

  ngOnInit(): void {
    this.themeCheck = document.querySelectorAll('.selector');
    this.getMessages();
    this.checkCurrentTheme();
  }

  getMessages() {
    this.selectTheme = _.get(MESSAGES, 'ACCOUNT_SETTINGS.SELECT');
  }

  changeTheme( theme:string ) {
    const themeUrl = `./assets/css/colors/${theme}.css`;
    this.themeName?.setAttribute('href', themeUrl);
    localStorage.setItem('theme', themeUrl);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    this.themeCheck.forEach( (htmlEl) => {
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
