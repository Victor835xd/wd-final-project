import {Component} from '@angular/core';

@Component({
    selector: 'app-personality-result',
    templateUrl: './personality-result.component.html',
    styleUrls: ['./personality-result.component.css']
})
export class PersonalityResultComponent {
    private dangers: { [key: string]: string[] } = {
        "isfj": [
            "Pueden ser algo pesimistas acerca del futuro.",
            "Pueden ser considerados insuficientemente sólidos cuando someten sus puntos de vista a otros.",
            "Pueden ser subvalorados por su estilo tranquilo y algo retraído."
        ],
        "isfp": [
            "Pueden ser demasiado confiados y crédulos.",
            "Pueden no criticar a otros cuando es necesario.",
            "Pueden ser heridos con facilidad y hasta retirarse."
        ],
        "istj": [
            "Pueden tener problemas si esperan que todo el mundo sea tan lógico y analítico como ellos.",
            "Pueden ignorar las implicaciones de largo alcance por priorizar operaciones de carácter cotidiano.",
            "Pueden descuidar las relaciones interpersonales."
        ]
    }
}
