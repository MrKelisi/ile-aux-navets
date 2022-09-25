import { Pipe, PipeTransform } from "@angular/core";
import { I18nService } from "@core/services";

@Pipe({name: 'i18n'})
export class I18nPipe implements PipeTransform {

    constructor(
        private i18nService: I18nService
    ) {}
    
    transform(value: any, domain: string): string {
        return this.i18nService.translate(domain, value);
    }
}