import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { AccountSettingsService } from './account-settings.service';
import { MESSAGES } from 'src/app/shared/global-messages';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public selectTheme: string = '';
  constructor( private settingsService: AccountSettingsService ) { }

  ngOnInit(): void {
    this.getMessages();
    this.settingsService.checkCurrentTheme();
  }

  getMessages() {
    this.selectTheme = _.get(MESSAGES, 'ACCOUNT_SETTINGS.SELECT');
  }

  changeTheme( theme:string ) {
    this.settingsService.changeTheme(theme);
  }

}
