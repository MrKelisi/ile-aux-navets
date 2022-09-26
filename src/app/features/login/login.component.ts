import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "@core/services";
import { SnackbarService } from "@shared/services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error;
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbarService: SnackbarService,
    private authenticationService: AuthenticationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .then(_ => this.router.navigate(['/']))
      .catch(error => {
        switch (error.status) {
          case 401:
            this.snackbarService.warn("Le nom d'utilisateur ou le mot de passe est incorrect.");
            break;
          case 503:
            this.snackbarService.error("L'application n'est pas disponible pour le moment. Veuillez réessayer plus tard.");
            break;
          default:
            this.snackbarService.error("Une erreur est survenue.");
        }
      })
      .then(_ => this.loading = false);
  }

}
