import { Component, OnInit } from '@angular/core';

declare const jQuery;

@Component({
    selector: 'app-rich-text',
    templateUrl: './rich-text.component.html',
    styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {


    constructor() { }

    ngOnInit(): void {
        /**jQuery(document).ready(function () {
            jQuery('#richtext').richText({
                bold: false,
                italic: false,
                underline: true
            });
        });*/
    }

}
