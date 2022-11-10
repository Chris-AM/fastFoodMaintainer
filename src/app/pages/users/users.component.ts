import { Component, OnInit } from '@angular/core';
import { MESSAGES } from 'src/app/shared/global-messages';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public search = '';
  public loading = '';
  public title = '';
  public admins = '';
  public app = '';
  public avatar = '';
  public name = '';
  public email = '';
  public actions = '';
  public prev = '';
  public next = '';

  constructor() {}

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.search = MESSAGES.USERS.SEARCH;
    this.loading = MESSAGES.USERS.LOADING;
    this.title = MESSAGES.USERS.TITLE;
    this.admins = MESSAGES.USERS.ADMINS;
    this.app = MESSAGES.USERS.APP;
    this.avatar = MESSAGES.USERS.TABLE.AVATAR;
    this.name = MESSAGES.USERS.TABLE.NAME;
    this.email = MESSAGES.USERS.TABLE.EMAIL;
    this.actions = MESSAGES.USERS.TABLE.ACTIONS;
    this.prev = MESSAGES.USERS.PREV;
    this.next = MESSAGES.USERS.NEXT;
  }
}
