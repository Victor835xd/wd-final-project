export type AnswerObject = { [key: string]: boolean };

export class VarkCalculator {

    static VISUAL_INDEXES: number[] = [1, 1, 3, 2, 3, 1, 3, 1, 0, 1, 2, 3, 3, 2, 3, 3];
    static AURAL_INDEXES: number[] = [0, 0, 0, 3, 2, 3, 1, 3, 1, 0, 0, 2, 2, 3, 2, 2];
    static READ_INDEXES: number[] = [2, 2, 2, 0, 1, 2, 2, 0, 2, 3, 1, 1, 1, 1, 1, 0];
    static KINESTHETIC_INDEXES: number[] = [3, 3, 1, 1, 0, 0, 0, 2, 3, 2, 3, 0, 0, 0, 0, 1];
    static VARK_TYPES: string[] = ['visual', 'aural', 'read', 'kinesthetic'];
    private static answersArr: boolean[][];

    private constructor() {
    }

    static getVarkScores(answerObjects: AnswerObject[]): number[] {
        this.answersArr = answerObjects.map(
            (answer: AnswerObject) => Object.values(answer)
        );
        return this.computeVarkScores()
    }

    private static computeVarkScores() {
        const scores = [0, 0, 0, 0]
        this.answersArr.forEach((answer: boolean[], index: number) => {
            scores[0] += Number(answer[this.VISUAL_INDEXES[index]]);
            scores[1] += Number(answer[this.AURAL_INDEXES[index]]);
            scores[2] += Number(answer[this.READ_INDEXES[index]]);
            scores[3] += Number(answer[this.KINESTHETIC_INDEXES[index]]);
        });
        return scores.slice();
    }

    static getVarkType(answerObjects: AnswerObject[]): string {
        const scores = this.getVarkScores(answerObjects);
        const maxIndex = this.argmax(scores);
        return this.VARK_TYPES[maxIndex];
    }

    private static argmax(array: number[]): number {
        return array.reduce(
            (maxIndex, currentValue, currentIndex, array) =>
                currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);
    }
}
