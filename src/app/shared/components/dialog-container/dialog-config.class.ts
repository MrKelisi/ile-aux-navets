import { MatDialogConfig } from "@angular/material/dialog";
import { DialogButton } from "./dialog-button.class";
import { DialogContainerComponent } from "./dialog-container.component";

export class DialogConfig extends MatDialogConfig {
    title?: string;
    messages?: string[] = [];
    width?: string = '500px';
    confirmLabel?: string = 'OK';
    options?: any = {};

    confirmValue?: (dialog: DialogContainerComponent, button: DialogButton) => any = (dialog, button) => true;

    constructor(dialogConfig?: DialogConfig) {
        super();
        if (dialogConfig) {
            Object.assign(this, dialogConfig);
        }
    }
}
