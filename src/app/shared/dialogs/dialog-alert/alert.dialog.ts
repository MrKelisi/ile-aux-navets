import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DialogContainerComponent } from "@shared/components";

@Component({
  templateUrl: './alert.dialog.html'
})
export class AlertDialog extends DialogContainerComponent {

  constructor(public dialogRef: MatDialogRef<AlertDialog>) {
    super(dialogRef);
  }
}
