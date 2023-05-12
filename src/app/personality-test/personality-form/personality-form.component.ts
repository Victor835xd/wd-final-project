import {Component} from '@angular/core';
import {TablesDataService} from "../services/tables-data.service";
import {FormGroup} from "@angular/forms";
import {TableData} from '../services/table-data.model';

type PersonalityTopic = {
    [key: string]: {
        firstPersonality: { [key: string]: number },
        secondPersonality: { [key: string]: number },
    }
}

@Component({
    selector: 'app-personality-form',
    templateUrl: './personality-form.component.html',
    styleUrls: ['./personality-form.component.css'],
    providers: [TablesDataService]
})
export class PersonalityFormComponent {
    TABLES_DATA: TableData[] = [];
    personalityFormRef: FormGroup;

    constructor(private tablesDataService: TablesDataService) {
        this.TABLES_DATA = tablesDataService.TABLES_DATA;
        this.personalityFormRef = tablesDataService.personalityForm;
    }


    onSubmitForm() {
        const foo: PersonalityTopic[] = Object.values(this.personalityFormRef.value);
        console.log(this.personalityFormRef.value);
        // const results = foo.map(
        //     (personalityTopic: PersonalityTopic, idx: number) => {
        //         return [
        //             Object.values(personalityTopic["firstPersonality"]),
        //             Object.values(personalityTopic["secondPersonality"])
        //         ];
        //     });
    //     reduce with results!!
    }
}
