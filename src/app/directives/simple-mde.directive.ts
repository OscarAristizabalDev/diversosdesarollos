import { Directive, Input, ElementRef, Output, EventEmitter } from '@angular/core';

import SimpleMDE from 'simplemde';

@Directive({
    selector: '[appSimpleMde]'
})
export class SimpleMdeDirective {

    @Input()
    appSimpleMde: string;

    // Variable para obtener el contenido inicial del editor del texto
    @Input('contenido')
    contenido: string;

    // Evento que se emite cuando hay un cambio en el texto
    @Output()
    contenidoOut: EventEmitter<String>;

    constructor(private element: ElementRef) {
        this.contenidoOut = new EventEmitter<string>();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.loadPlugin();
        }, 900);
    }

    /**ngOnInit(){
        setTimeout(() => {
            this.loadPlugin();
        }, 900);
    }*/

    private loadPlugin() {

        // Se instancia el SimpleMDE
        let simpleMDE = new SimpleMDE({
            autoDownloadFontAwesome: true,
            element: this.element.nativeElement,
            spellChecker: false,
            autofocus: true,
            blockStyles: {
                bold: "__",
                italic: "_"
            },
            //placeholder: this.contenido
            //toolbar: ['bold', 'italic', 'heading', '|', 'quote'],
        });
        // Se envía el valor inicial al simpleMDE
        simpleMDE.value(this.contenido);

        const that = this;
        // Se captura el evento de cambio de valor en el text area
        simpleMDE.codemirror.on("change", function(){
            // Se obtiene el texto en formato HTML
            let contenidoHTML = simpleMDE.markdown(simpleMDE.value());
            // Se emite el contenido
            that.contenidoOut.emit(contenidoHTML);
        });
    }

}
