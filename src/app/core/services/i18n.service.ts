import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class I18nService {

    constructor() {}
    
    translate(domain: string, data: string): string {
        switch(domain) {
            case 'fruits':
                switch(data) {
                    case 'APPLES': return 'Pommes';
                    case 'CHERRIES': return 'Cerises';
                    case 'ORANGES': return 'Oranges';
                    case 'PEACHES': return 'Pêches';
                    case 'PEARS': return 'Poires';
                }
                break;
            case 'errors':
                switch(data) {
                    case 'required': return 'Requis';
                    case 'pattern': return 'Format incorrect';
                    case 'min': return 'Trop petit';
                    case 'max': return 'Trop grand';
                    case 'minlength': return 'Longueur minimale non-atteinte';
                    case 'maxlength': return 'Longueur maximale atteinte';
                    default: return data;
                }
                break;
        }

        return '';
    }
}