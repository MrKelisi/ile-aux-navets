import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {User} from '../../_models/user.class';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent implements OnInit, OnChanges {

  canEdit = false;
  environment = environment;
  @Input() user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    this.canEdit = (this.user && this.user.username === this.authenticationService.currentUserValue.username);
  }

}
