import {Component} from '@angular/core';
import {QuestionsAnswersService} from "../services/questions-answers.service";
import {FormGroup} from "@angular/forms";

type Question = { question: string };
type Answers = { answers: string[] };
type QuestionAnswers = Question & Answers;

@Component({
    selector: 'app-vark-form',
    templateUrl: './vark-form.component.html',
    styleUrls: ['./vark-form.component.css']
})
export class VarkFormComponent {
    varkForm: FormGroup = new FormGroup({});
    varkQuestions: QuestionAnswers[] = [];
    answersArr: boolean[][] = []

    visualIdxs = [1, 1, 3, 2, 3, 1, 3, 1, 0, 1, 2, 3, 3, 2, 3, 3]
    auralIdxs = [0, 0, 0, 3, 2, 3, 1, 3, 1, 0, 0, 2, 2, 3, 2, 2]
    readIdxs = [2, 2, 2, 0, 1, 2, 2, 0, 2, 3, 1, 1, 1, 1, 1, 0]
    kinestheticIdxs = [3, 3, 1, 1, 0, 0, 0, 2, 3, 2, 3, 0, 0, 0, 0, 1]

    constructor(private questionAnswersService: QuestionsAnswersService) {
        this.varkForm = this.questionAnswersService.varkFormRef;
        this.varkQuestions = this.questionAnswersService.varkQuestionsRef;
    }

    onSubmitForm() {
        const answers = Object.values(this.varkForm.value)
        this.answersArr = answers.map((answer) => {
            return Object.values(answer as Array<boolean>);
        });
        let scores = this.getVarkScores();
    }

    getVarkScores() {
        const scores = [0, 0, 0, 0]
        this.answersArr.forEach((answer: boolean[], index: number) => {
            scores[0] += Number(answer[this.visualIdxs[index]]);
            scores[1] += Number(answer[this.auralIdxs[index]]);
            scores[2] += Number(answer[this.readIdxs[index]]);
            scores[3] += Number(answer[this.kinestheticIdxs[index]]);
        });
        return scores
    }
}
