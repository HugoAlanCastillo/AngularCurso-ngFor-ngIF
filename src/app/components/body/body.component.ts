import {Component} from '@angular/core'
@Component({
 selector: 'app-body',
 templateUrl: './body.component.html'
})
export class BodyComponent{
 mostrar=true;
 frase: any = {
 mensaje: 'Cuentan que cuando no puedes más y tus fuerzas ves marchar Hay algo mágico en tu interior que te da alas para luchar',
 autor: 'TEMPLO DEL ADIOS'
 };
 personajes: string[]=['Spiderman','Venom','Dr. Octopus']
}
