import {Component} from '@angular/core';
import {QuestionsAnswersService, VarkQuestions} from "../services/questions-answers.service";
import {FormGroup} from "@angular/forms";
import {AnswerObject, VarkCalculator} from "./vark-calculator.model";
import {UserDataService} from "../../services/user-data.service";

@Component({
    selector: 'app-vark-form',
    templateUrl: './vark-form.component.html',
    styleUrls: ['./vark-form.component.css']
})
export class VarkFormComponent {
    private varkForm: FormGroup = new FormGroup({});
    varkQuestions: VarkQuestions[] = [];

    constructor(private questionAnswersService: QuestionsAnswersService,
                private userDataService: UserDataService) {
        this.varkForm = this.questionAnswersService.varkFormRef;
        this.varkQuestions = this.questionAnswersService.varkQuestionsRef;
    }

    onSubmitForm() {
        const answerObjects: AnswerObject[] = Object.values(this.varkForm.value);
        this.userDataService.varkScores = VarkCalculator.getVarkScores(answerObjects);
        this.userDataService.varkTypeObtained = VarkCalculator.getVarkType(answerObjects);
    }
}
