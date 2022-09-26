import { Component, OnInit } from "@angular/core";
import { User } from "@core/models";
import { UsersService } from "@core/services";
import { SnackbarService } from "@shared/services";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-everybody',
  templateUrl: './everybody.component.html',
  styleUrls: ['./everybody.component.css'],
})
export class EverybodyComponent implements OnInit {

  environment = environment;
  users: User[] = [];

  constructor(
    private snackbarService: SnackbarService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.findAll()
      .then(users => this.users = users)
      .catch(error => this.snackbarService.error(error));
  }

}
