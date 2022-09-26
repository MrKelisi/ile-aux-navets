import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogButton, DialogConfig, DialogContainerComponent } from "@shared/components";
import { AlertDialog, ConfirmDialog } from "@shared/dialogs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  alert<T extends AlertDialog>(config: DialogConfig, dialogType: ComponentType<T>) {
    const buttons: DialogButton[] = [
      new DialogButton(config.confirmLabel, true)
    ];

    return this.openDialog(config, dialogType, buttons);
  }

  confirm<T extends ConfirmDialog>(config: DialogConfig, dialogType: ComponentType<T>) {
    const buttons: DialogButton[] = [
      new DialogButton('Annuler', false),
      new DialogButton(config.confirmLabel, true)
    ];

    return this.openDialog(config, dialogType, buttons);
  }

  private openDialog<T extends DialogContainerComponent>(config: DialogConfig, dialogType: ComponentType<T>, buttons: DialogButton[]): MatDialogRef<T> {
    const dialogRef: MatDialogRef<T> = this.dialog.open(dialogType, config);
    
    Object.assign(dialogRef.componentInstance, {
      title: config.title,
      messages: config.messages,
      confirmValue: config.confirmValue,
      buttons: buttons,
      ...config.options
    });

    return dialogRef;
  }
}
