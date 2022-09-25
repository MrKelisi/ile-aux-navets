import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "@core/models";
import { UsersService } from "@core/services";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');

    this.usersService.find(username).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['/']);
      },
      () => {}
    );
  }

}

