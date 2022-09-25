import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { User } from "@core/models";
import { AuthenticationService } from "@core/services";
import { environment } from "src/environments/environment";

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
