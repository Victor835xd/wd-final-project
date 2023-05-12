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
    tableData: TableData = new TableData();

    TOPIC: string = ""
    @Input() topicIdx: number = 0;
    displayedColumns: string[] = ['personality', 'points'];

    // ######################################################################

    constructor(private tablesDataService: TablesDataService) {
    }

    ngOnInit(): void {
        this.tableData = this.tablesDataService.TABLES_DATA[this.topicIdx];
        this.TOPIC = `${(this.topicIdx + 1)}. ${this.tablesDataService.TOPICS[this.topicIdx]}`;

        this.personalityFormRef = this.tablesDataService.personalityForm;
        this.tableDataFormRef = (this.tablesDataService.personalityForm.get(`topic${this.topicIdx}`) as FormGroup);
    }

    onSliderInput(event: Event, element: { characteristic: string }): void {
        let points: number = Number((event.target as HTMLInputElement).value)
        const idx = this.tableData.firstPersonalityCharacteristics.indexOf(element);
        this.tableDataFormRef.get("secondPersonality")?.get(`answer${idx}`)?.setValue(10 - points);

        let totalPoints = this.getFirstPersonalityTotalPoints();
        this.tableDataFormRef.get("firstPersonality")?.get('total')?.setValue(totalPoints);

        totalPoints = this.getSecondPersonalityTotalPoints();
        this.tableDataFormRef.get("secondPersonality")?.get('total')?.setValue(totalPoints);
    }

    getTopicFormGroupName(): string {
        return `topic${this.topicIdx}`;
    }

    // ######################################################################

    getFirstPersonalityCharacteristicsControlName(element: { characteristic: string }): string {
        const idx = this.tableData.firstPersonalityCharacteristics.indexOf(element);
        return `answer${idx}`;
    }

    getFirstPersonalityTotalPoints() {
        let totalPoints: number = 0;
        let characteristicLength = this.tableData.firstPersonalityCharacteristics.length;
        for (let i = 0; i < characteristicLength; i++) {
            totalPoints += this.getFirstPersonalityPoints(this.tableData.firstPersonalityCharacteristics[i]);
        }
        return totalPoints;
    }

    getFirstPersonalityPoints(element: { characteristic: string }) {
        const idx = this.tableData.firstPersonalityCharacteristics.indexOf(element);
        return this.tableDataFormRef.get("firstPersonality")?.get(`answer${idx}`)?.getRawValue();
    }

    // ######################################################################

    getSecondPersonalityCharacteristicsControlName(element: { characteristic: string }): string {
        const idx = this.tableData.secondPersonalityCharacteristics.indexOf(element);
        return `answer${idx}`;
    }

    getSecondPersonalityTotalPoints() {
        let totalPoints: number = 0;
        let characteristicLength = this.tableData.secondPersonalityCharacteristics.length;
        for (let i = 0; i < characteristicLength; i++) {
            totalPoints += this.getSecondPersonalityPoints(this.tableData.secondPersonalityCharacteristics[i]);
        }
        return totalPoints;
    }

    getSecondPersonalityPoints(element: { characteristic: string }) {
        const idx = this.tableData.secondPersonalityCharacteristics.indexOf(element);
        return this.tableDataFormRef.get("secondPersonality")?.get(`answer${idx}`)?.getRawValue();
    }
}
