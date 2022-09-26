import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/services';
import { DialogConfig } from '@shared/components';
import { OpenGatesDialog } from '@shared/dialogs';
import { DialogService, SnackbarService } from '@shared/services';

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
    private dialogService: DialogService,
    private snackbarService: SnackbarService,
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

  openGates() {
    const config = new DialogConfig({
      title: 'Ouvrir mes portes',
      confirmLabel: 'Ouvrir'
    });

    this.dialogService.confirm(config, OpenGatesDialog).afterClosed().subscribe(confirm => {
      if (confirm) {
        this.snackbarService.success('Vos portes sont ouvertes !');
      }
    })
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/logout']);
  }

}
