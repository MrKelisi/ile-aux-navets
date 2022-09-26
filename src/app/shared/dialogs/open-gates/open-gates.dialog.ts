import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfirmDialog } from "../dialog-confirm/confirm.dialog";

@Component({
  templateUrl: './open-gates.dialog.html',
  styleUrls: ['./open-gates.dialog.scss']
})
export class OpenGatesDialog extends ConfirmDialog implements OnInit {
    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            dodoCode: new FormControl(null, [Validators.pattern('[a-zA-Z0-9]{5}'), Validators.required]),
            turnipPrice: new FormControl(null, [Validators.min(0), Validators.max(9999), Validators.pattern('[0-9]*')])
        })
    }
}
