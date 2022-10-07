import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from './account-settings/account-settings.service';

declare function customInitFunctions();


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  constructor( private settingsService: AccountSettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
