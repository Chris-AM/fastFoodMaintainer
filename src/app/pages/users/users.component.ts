import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MESSAGES } from 'src/app/shared/global-messages';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public totalUsers: number = 0;
  public users: User[] = [];

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

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.getMessages();
    this.getUsers();
  }

  public getUsers() {
    this.usersService.loadUsers().subscribe({
      next: ({ totalDocs, docs }) => {
        this.totalUsers = totalDocs;
        this.users = docs;
      },
    });
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
