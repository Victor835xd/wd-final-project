import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../services/user-data.service";

@Component({
    selector: 'app-vark-result',
    templateUrl: './vark-result.component.html',
    styleUrls: ['./vark-result.component.css']
})
export class VarkResultComponent implements OnInit {
    varkType: string = '';

    constructor(private userDataService: UserDataService) {
    }

    ngOnInit(): void {
        this.varkType = this.userDataService.varkTypeObtained;
    }
}
