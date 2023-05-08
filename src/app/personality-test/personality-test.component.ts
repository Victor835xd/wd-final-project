import {Component} from '@angular/core';
import {TablesDataService} from "./services/tables-data.service";

@Component({
    selector: 'app-personality-test',
    templateUrl: './personality-test.component.html',
    styleUrls: ['./personality-test.component.css'],
    providers: [TablesDataService]
})
export class PersonalityTestComponent {
}
