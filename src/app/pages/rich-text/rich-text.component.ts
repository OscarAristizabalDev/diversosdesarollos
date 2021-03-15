import { Component, Input, OnInit } from '@angular/core';

declare const jQuery;

@Component({
    selector: 'app-rich-text',
    templateUrl: './rich-text.component.html',
    styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

    // Variable con el contenido inicial
    contenido = 'Contenido inicial';

    constructor() {}

    ngOnInit(): void {}

    /**
     * Función para guardar la información del SimpleMDE
     */
    save(){
        console.log(this.contenido);
    }

    /**
     * Permite obtener los cambios en el SimpleMDE cada vez que hay cambios
     * @param contenido 
     */
    obtenerContenido(contenido){
        this.contenido = contenido;
    }

}
