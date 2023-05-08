export type Characteristics = { characteristic: string } []

export class TableData {
    firstPersonality: string = '';
    secondPersonality: string = '';
    firstPersonalityCharacteristics: Characteristics = [];
    secondPersonalityCharacteristics: Characteristics = [];
}
