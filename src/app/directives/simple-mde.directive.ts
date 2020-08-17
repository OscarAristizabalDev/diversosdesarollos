import { Directive, Input, ElementRef } from '@angular/core';

import SimpleMDE from 'simplemde';

@Directive({
    selector: '[appSimpleMde]'
})
export class SimpleMdeDirective {

    @Input()
    appSimpleMde: string;

    constructor(private element: ElementRef) { }

    /**ngAfterViewInit() {
        setTimeout(() => {
            this.loadPlugin();
        }, 900);
    }*/

    ngOnInit(){
        setTimeout(() => {
            this.loadPlugin();
        }, 900);
    }

    private loadPlugin() {

        let simpleMDE = new SimpleMDE({
            autoDownloadFontAwesome: true,
            element: this.element.nativeElement,
            spellChecker: false,
            autofocus: true,
            blockStyles: {
                bold: "__",
                italic: "_"
            },
            placeholder: 'ingrese texto'
            //toolbar: ['bold', 'italic', 'heading', '|', 'quote'],
        })

    }

}
