import {Component} from '@angular/core';
import {QuestionsAnswersService} from "./services/questions-answers.service";

@Component({
    selector: 'app-vark-test',
    templateUrl: './vark-test.component.html',
    styleUrls: ['./vark-test.component.css'],
    providers: [QuestionsAnswersService]
})
export class VarkTestComponent {
}
