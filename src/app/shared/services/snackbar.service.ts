import { LowerCasePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { SnackbarToastComponent } from "@shared/components";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackbar: MatSnackBar,
    private lowerCasePipe: LowerCasePipe
  ) {}

  success(message: string) {
    this.openToast(message, 'SUCCESS', 3000)
  }

  warn(message: string) {
    this.openToast(message, 'WARN', 5000)
  }

  error(message: any) {
    if (typeof message === 'string') {
      this.openToast(message, 'ERROR', 8000)
    } else if (message.message && typeof message.message === 'string') {
      this.openToast(message.message, 'ERROR', 8000)
    } else if (message instanceof HttpErrorResponse) {
      this.openToast(`${message.error ? message.error.message : message.message}`, 'ERROR', 8000)
    }
  }

  private openToast(message: string, type: 'SUCCESS' | 'WARN' | 'ERROR', duration: number) {
    if (message) {
      const config = new MatSnackBarConfig();
      config.data = {message, type};
      config.panelClass = [this.lowerCasePipe.transform(type)];
      config.duration = duration;

      this.snackbar.openFromComponent(SnackbarToastComponent, config);
    }
  }
}
