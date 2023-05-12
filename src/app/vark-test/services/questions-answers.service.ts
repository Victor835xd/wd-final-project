import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

type Question = { question: string };
type Answers = { answers: string[] };
export type VarkQuestions = Question & Answers;

@Injectable({
    providedIn: 'root'
})
export class QuestionsAnswersService {
    private formBuilder: FormBuilder = new FormBuilder();
    private varkForm: FormGroup = this.formBuilder.group({});

    private varkQuestions: VarkQuestions[] = [
        {
            question: 'Usted cocinará algo especial para su familia. Usted haría:',
            answers: [
                'Preguntar a amigos por sugerencias.',
                'Dar una vista al recetario por ideas de las fotos.',
                'Usar un libro de cocina donde usted sabe hay una buena receta.',
                'Cocinar algo que usted sabe sin la necesidad de instrucciones.'
            ]
        },
        {
            question: 'Usted escogerá alimento en un restaurante o un café. Usted haría:',
            answers: [
                'Escuchar al mesero o pedir que amigos recomienden opciones.',
                'Mirar lo qué otros comen o mirar dibujos de cada platillo.',
                'Escoger de las descripciones en el menú.',
                'Escoger algo que tienes o has tenido antes.'
            ]
        },
        {
            question: 'Aparte del precio, qué más te influenciaría para comprar un libro de ciencia ficción',
            answers: [
                'Un amigo habla acerca de él y te lo recomienda.',
                'Tienes historias reales, experiencias y ejemplos.',
                'Leyendo rápidamente partes de él.',
                'El diseño de la pasta es atractivo.'
            ]
        },
        {
            question: 'Usted ha terminado una competencia o un examen y le gustaría tener alguna retroalimentación. Te gustaría retroalimentarte:',
            answers: [
                'Usando descripciones escritas de los resultados.',
                'Usando ejemplos de lo que usted ha hecho.',
                'Usando gráficos que muestran lo que usted ha logrado.',
                'De alguien que habla por usted.'
            ]
        },
        {
            question: 'Usted tiene un problema con la rodilla. Usted preferiría que el doctor:',
            answers: [
                'Uste un modelo de plástico y te enseñe lo que está mal.',
                'Te de una página de internet o algo para leer.',
                'Te describa lo qué está mal.',
                'Te enseñe un diagrama de lo que está mal.'
            ]
        }
    ];

    private _VARK_TYPE_OBTAINED: string = '';

    constructor() {
        this.initVarkForm()
    }

    private initVarkForm(): void {
        this.varkQuestions.forEach(
            this.createFormGroupsOfVarkForm.bind(this)
        );
    }

    private createFormGroupsOfVarkForm(questionAnswer: VarkQuestions, index: number): void {
        let question = this.formBuilder.group({})
        this.initFormControlsOfQuestionFormGroup(question, questionAnswer.answers);
        this.varkForm.addControl(`question${index}`, question);
    }

    private initFormControlsOfQuestionFormGroup(formGroup: FormGroup, answers: string[]): void {
        answers.forEach((answer: string, index: number) => {
            let answerFormControl = this.formBuilder.control(false);
            formGroup.addControl(`answer${index}`, answerFormControl);
        });
    }

    getQuestionWithIndexAdded(index: number): string {
        const question = this.varkQuestions[index].question;
        return `${(index + 1)}. ${question}`;
    }

    // must return a copy not a reference!!
    get varkFormRef(): FormGroup {
        return this.varkForm
    }

    get varkQuestionsRef(): VarkQuestions[] {
        return Array.from(this.varkQuestions);
    }

    set VARK_TYPE_OBTAINED(value: string) {
        this._VARK_TYPE_OBTAINED = value;
    }
}
