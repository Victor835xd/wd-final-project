import {Component, Input, OnInit} from '@angular/core';
import {TableData} from "../../services/table-data.model";
import {FormGroup} from "@angular/forms";
import {TablesDataService} from "../../services/tables-data.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    personalityFormRef: FormGroup = new FormGroup({});
    tableDataFormRef: FormGroup = new FormGroup({});

    @Input() tableData: TableData = new TableData();
    @Input() topicIdx: number = 0;

    displayedColumns: string[] = ['personality', 'points'];
    TOPIC: string = ""

    constructor(private tablesDataService: TablesDataService) {
    }

    ngOnInit(): void {
        this.TOPIC = this.tablesDataService.TOPICS[this.topicIdx];
        this.personalityFormRef = this.tablesDataService.personalityForm;
        this.tableDataFormRef = this.tablesDataService.personalityForm.get(`topic${this.topicIdx}`) as FormGroup;
    }

    getTopicFormGroupName(): string {
        return `topic${this.topicIdx}`;
    }

    onSliderInput(event: Event, element: { characteristic: string }): void {
        let points: number = Number((event.target as HTMLInputElement).value)
        const idx = this.tableData.firstPersonalityCharacteristics.indexOf(element);
        (this.tableDataFormRef.get("secondPersonality") as FormGroup).get(`answer${idx}`)?.setValue(10 - points);
    }

    getCharacteristicFromControlName(element: { characteristic: string }): string {
        const idx = this.tableData.firstPersonalityCharacteristics.indexOf(element);
        return `answer${idx}`;
    }


    getCharacteristicFromControlNameFoo(element: { characteristic: string }): string {
        const idx = this.tableData.secondPersonalityCharacteristics.indexOf(element);
        return `answer${idx}`;
    }

    getPoints(element: { characteristic: string }) {
        const idx = this.tableData.secondPersonalityCharacteristics.indexOf(element);
        return (this.tableDataFormRef.get("secondPersonality") as FormGroup).get(`answer${idx}`)?.getRawValue();
    }
}
