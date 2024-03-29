import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "@core/services";
import { SnackbarService } from "@shared/services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error;
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      display_name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.f.username.value, this.f.display_name.value, this.f.password.value)
      .then(_ => this.router.navigate(['/']))
      .catch(error => {
        switch (error.status) {
          case 409:
            this.snackbarService.error("Ce nom d'utilisateur est déjà utilisé, veuillez en utiliser un autre.")
            break;
          case 503:
            this.snackbarService.error("L'application n'est pas disponible pour le moment. Veuillez réessayer plus tard.")
            break;
          default:
            this.snackbarService.error("Une erreur est survenue.");
        }
      })
      .then(_ => this.loading = false);
  }

}
