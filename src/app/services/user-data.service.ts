import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private _varkScores: number[] = [];
    private _varkTypeObtained: string = '';

    constructor() {
    }

    set varkScores(value: number[]) {
        this._varkScores = value;
    }

    get varkTypeObtained(): string {
        return this._varkTypeObtained;
    }

    set varkTypeObtained(value: string) {
        this._varkTypeObtained = value;
    }
}
