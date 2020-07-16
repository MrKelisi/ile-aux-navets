import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user.class';
import {UsersService} from '../_services/users.service';

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
