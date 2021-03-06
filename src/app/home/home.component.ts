import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  connected: boolean;
  username: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.connected = false;
  }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue) {
      this.connected = true;
      this.username = this.authenticationService.currentUserValue.username;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/logout']);
  }

}
