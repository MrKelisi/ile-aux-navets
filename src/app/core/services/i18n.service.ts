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
        }

        return '';
    }
}