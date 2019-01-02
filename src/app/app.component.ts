import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService) {
    authService.handleAuthentication()
  }
  title = 'CrewText';

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.authService.renewSession();
    }
  }

}
