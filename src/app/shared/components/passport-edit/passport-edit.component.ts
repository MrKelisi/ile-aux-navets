import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Face } from '@core/models';
import { FacesService } from '@core/services';
import { SnackbarService } from '@shared/services';
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
    private router: Router,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {}

  ngOnChanges(changes): void {
    this.facesService.find(this.username)
      .then(face => this.face = face)
      .catch(error => this.snackbarService.error(error));
  }

  plus(input) {
    input++;
  }

  minus(input) {
    input--;
  }

  onSubmit() {
    this.facesService.update(this.username, this.face)
      .then(face => {
        this.snackbarService.success("Votre profil a bien été sauvegardé.");
        this.router.navigate(['/']);
      })
      .catch(error => this.snackbarService.error(error));
  }

}
