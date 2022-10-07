import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
  }
}
