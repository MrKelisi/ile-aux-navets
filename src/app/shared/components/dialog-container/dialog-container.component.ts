import { Component, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DialogButton } from "./dialog-button.class";

@Component({
  selector: 'dialog-container',
  templateUrl: './dialog-container.component.html'
})
export class DialogContainerComponent {
  @Input() title: string;
  @Input() messages: string[] = [];
  @Input() buttons: DialogButton[] = [];
  
  @Input() loading = false;
  @Input() valid = true;

  constructor(public dialogRef: MatDialogRef<DialogContainerComponent>) {}

  confirmValue: (dialog: DialogContainerComponent, button: DialogButton) => any = (dialog, button) => true;

  close(button: DialogButton) {
    if (!button.value) {
      return this.dialogRef.close();
    }

    this.dialogRef.close(this.dialogRef.componentInstance.confirmValue(this, button));
  }
}
