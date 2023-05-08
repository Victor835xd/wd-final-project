import {Component, Input, OnInit} from '@angular/core';
import {QuestionsAnswersService} from "../../services/questions-answers.service";
import {FormGroup} from "@angular/forms";

type Question = { question: string };
type Answers = { answers: string[] };
type VarkQuestions = Question & Answers;

@Component({
    selector: 'app-question-answers',
    templateUrl: './question-answers.component.html',
    styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {
    @Input() questionIndex: number = 0;
    varkQuestions: VarkQuestions[];
    varkForm: FormGroup;

    question: string = "";
    answers: string[] = [];

    constructor(private qaService: QuestionsAnswersService) {
        this.varkForm = this.qaService.varkFormRef;
        this.varkQuestions = this.qaService.varkQuestionsRef;
    }

    ngOnInit(): void {
        this.question = this.qaService.getQuestionWithIndexAdded(this.questionIndex);
        this.answers = this.varkQuestions[this.questionIndex].answers;
    }

    getQuestionControlGroupName(): string {
        return ('question' + this.questionIndex);
    }

    getAnswerControlName(index: number): string {
        return ('answer' + index);
    }
}
