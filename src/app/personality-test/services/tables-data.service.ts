import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TableData} from "./table-data.model";

@Injectable({
    providedIn: 'root'
})
export class TablesDataService {
    private formBuilder: FormBuilder = new FormBuilder();
    private _personalityForm: FormGroup = this.formBuilder.group({});

    private _TOPICS: string[] = [
        "1. Energía, focalización y actitud vital",
        "2. Manejo de la información y actitud ante el entorno",
        "3. Actitud y toma de decisiones"
    ]

    private _TABLES_DATA: TableData[] = [
        {
            firstPersonality: 'extrovertido',
            firstPersonalityCharacteristics: [
                {characteristic: 'Emprendedor y entusiasta'},
                {characteristic: 'Actúa y luego piensa'},
                {characteristic: 'Piensa en voz alta'},
            ],
            secondPersonality: 'introvertido',
            secondPersonalityCharacteristics: [
                {characteristic: 'Reservado'},
                {characteristic: 'Piensa y luego actua'},
                {characteristic: 'Piensa en voz baja'},
            ]
        },
        {
            firstPersonality: 'sensorial',
            firstPersonalityCharacteristics: [
                {characteristic: 'Confía en la experiencia propia'},
                {characteristic: 'Realista, ve lo que es'},
                {characteristic: 'Práctico y realista'},
            ],
            secondPersonality: 'intuitivo',
            secondPersonalityCharacteristics: [
                {characteristic: 'Confía en sus instintos'},
                {characteristic: 'Imaginativo, ve lo que podría ser'},
                {characteristic: 'Prefiere desarrollar nuevas destrezas'},
            ]
        },
        {
            firstPersonality: 'racional',
            firstPersonalityCharacteristics: [
                {characteristic: 'Tiende a ver defectos ajenos'},
                {characteristic: 'Se convence con lógica'},
                {characteristic: 'Aparenta ser frío y reservado'},
            ],
            secondPersonality: 'emocional',
            secondPersonalityCharacteristics: [
                {characteristic: 'Tiende a ver cualidades ajenas'},
                {characteristic: 'Se convence por sus sensaciones'},
                {characteristic: 'Aparenta ser cálido y amistoso'},
            ]
        },
    ]

    constructor() {
        this.initPersonalityForm();
    }

    private initPersonalityForm(): void {
        this._TABLES_DATA.forEach((tableData: TableData, index: number) => {
            let firstPersonality = this.formBuilder.group({});
            let secondPersonality = this.formBuilder.group({});

            this.initFormControlsOfPersonalityFormGroup(firstPersonality, tableData, 0);
            this.initFormControlsOfPersonalityFormGroup(secondPersonality, tableData, 10);

            let tableFormGroup = this.formBuilder.group({
                firstPersonality: firstPersonality,
                secondPersonality: secondPersonality
            });
            this._personalityForm.addControl(`topic${index}`, tableFormGroup);
        });
    }

    private initFormControlsOfPersonalityFormGroup(formGroup: FormGroup,
                                                   tableData: TableData,
                                                   initState: number): void {
        const numCharacteristics = tableData.firstPersonalityCharacteristics.length
        for (let i = 0; i < numCharacteristics; i++) {
            formGroup.addControl(`answer${i}`, this.formBuilder.control(initState));
        }
    }

    get personalityForm(): FormGroup {
        return this._personalityForm;
    }

    get TOPICS(): string[] {
        return this._TOPICS;
    }

    get TABLES_DATA(): TableData[] {
        return this._TABLES_DATA;
    }
}
