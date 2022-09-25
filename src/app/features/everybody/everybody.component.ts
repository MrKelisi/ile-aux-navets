import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { User } from "@core/models";
import { UsersService } from "@core/services";
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
    private http: HttpClient,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.findAll().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      },
      () => {}
    );

  }

}
