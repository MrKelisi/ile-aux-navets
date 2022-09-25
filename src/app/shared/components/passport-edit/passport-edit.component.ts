import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Face } from '@core/models';
import { FacesService } from '@core/services';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-passport-edit',
  templateUrl: './passport-edit.component.html',
  styleUrls: ['./passport-edit.component.css']
})
export class PassportEditComponent implements OnInit, OnChanges {

  environment = environment;
  face: Face;
  @Input() username: string;

  constructor(
    private facesService: FacesService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes): void {
    this.facesService.find(this.username)
      .subscribe(
      data => {
        this.face = data;
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }

  plus(input) {
    input++;
  }

  minus(input) {
    input--;
  }

  onSubmit() {
    this.facesService.update(this.username, this.face)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
