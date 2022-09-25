import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Face } from '@core/models';
import { FacesService } from '@core/services';
import { environment } from 'src/environments/environment';

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
      .then(face => this.face = face)
      .catch(error => console.log(error));
  }

  plus(input) {
    input++;
  }

  minus(input) {
    input--;
  }

  onSubmit() {
    this.facesService.update(this.username, this.face)
      .then(face => this.router.navigate(['/']))
      .catch(error => console.log(error));
  }

}
