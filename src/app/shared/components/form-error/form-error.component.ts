import { Component, Input } from "@angular/core";
import { I18nService } from "@core/services";

@Component({
    selector: '[form-error]',
    template: '{{ errorMessage }}'
})
export class FormErrorComponent {
    errorMessage: string;

    @Input() set errors(errors: any) {
        if (errors) {
            this.errorMessage = this.i18nService.translate('errors', Object.keys(errors).pop());
        }
    }

    constructor(private i18nService: I18nService) {}
}