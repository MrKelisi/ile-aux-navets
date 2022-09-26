import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";

@Component({
  templateUrl: './snackbar-toast.component.html',
  styleUrls: ['./snackbar-toast.component.scss']
})
export class SnackbarToastComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {message: string, type: 'SUCCESS' | 'WARN' | 'ERROR'}
  ) {}

  getIcon(): string {
    if (this.data) {
      switch(this.data.type) {
        case 'SUCCESS':
          return 'done';
        case 'WARN':
          return 'warning';
        case 'ERROR':
          return 'priority_high';
      }
    }

    return 'info';
  }
}
