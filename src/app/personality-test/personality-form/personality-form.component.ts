import {Component} from '@angular/core';
import {TablesDataService} from "../services/tables-data.service";
import {FormGroup} from "@angular/forms";
import {TableData} from '../services/table-data.model';

@Component({
    selector: 'app-personality-form',
    templateUrl: './personality-form.component.html',
    styleUrls: ['./personality-form.component.css']
})
export class PersonalityFormComponent {
    TABLES_DATA: TableData[] = [];
    personalityFormRef: FormGroup;

    constructor(private tablesDataService: TablesDataService) {
        this.TABLES_DATA = tablesDataService.TABLES_DATA
        this.personalityFormRef = tablesDataService.personalityForm;
    }

    onSubmitForm() {
        console.log(this.personalityFormRef.value);
    }
}
