import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MESSAGES } from 'src/app/shared/global-messages';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  public totalUsers: number = 0;
  public users: User[] = [];
  public isLoadingSpinner = true;
  public search = '';
  public loading = '';
  public title = '';
  public total = '';
  public admins = '';
  public app = '';
  public avatar = '';
  public name = '';
  public email = '';
  public actions = '';
  public role = '';
  public prev = '';
  public next = '';
  public limit = 10;
  public page = 1;
  public hasNextPage = false;
  public hasPrevPage = false;
  //TODO: After MVP sort users by Admin and APP
  public usersST = '';

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.getMessages();
    this.getUsers();
  }

  //TODO: After MVP sort users by Admin and APP

  public getUsers() {
    this.isLoadingSpinner = true;
    this.usersService.loadUsers(this.limit, this.page).subscribe({
      next: ({ totalDocs, docs, hasNextPage, hasPrevPage }) => {
        this.hasPrevPage = hasPrevPage;
        this.hasNextPage = hasNextPage;
        this.totalUsers = totalDocs;
        this.users = docs;
        this.isLoadingSpinner = false;
      },
    });
  }

  public changePage(page: number) {
    this.page += page;
    if (this.page < 0) {
      this.page = 0;
    }
    if (this.page > this.totalUsers) {
      this.page -= page;
    }
    this.getUsers();
  }

  public deleteUser(user: User) {
    Swal.fire({
      text: MESSAGES.USERS.SWAL_DELETE.TEXT,
      icon: 'warning',
      titleText: MESSAGES.USERS.SWAL_DELETE.TITLE_TEXT + user.name,
      showCancelButton: true,
      confirmButtonColor: MESSAGES.USERS.SWAL_DELETE.CONFIRM_BUTTON_COLOR,
      cancelButtonColor: MESSAGES.USERS.SWAL_DELETE.CANCEL_BUTTON_COLOR,
      confirmButtonText: MESSAGES.USERS.SWAL_DELETE.CONFIRM_BUTTON_TEXT,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(user).subscribe({
          next: (resp: any) => {
            Swal.fire(user.name, resp.message, 'success');
            this.getUsers();
          },
        });
      }
    });
  }

  public getMessages() {
    this.search = MESSAGES.USERS.SEARCH;
    this.loading = MESSAGES.USERS.LOADING;
    this.title = MESSAGES.USERS.TITLE;
    this.total = MESSAGES.USERS.TOTAL;
    this.admins = MESSAGES.USERS.ADMINS;
    this.app = MESSAGES.USERS.APP;
    this.avatar = MESSAGES.USERS.TABLE.AVATAR;
    this.name = MESSAGES.USERS.TABLE.NAME;
    this.email = MESSAGES.USERS.TABLE.EMAIL;
    this.actions = MESSAGES.USERS.TABLE.ACTIONS;
    this.role = MESSAGES.USERS.TABLE.ROLE;
    this.prev = MESSAGES.USERS.PREV;
    this.next = MESSAGES.USERS.NEXT;
    //TODO: After MVP sort users by Admin and APP
    this.usersST = 'lista de usuarios';
  }
}
