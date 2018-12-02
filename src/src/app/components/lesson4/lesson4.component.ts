import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-lesson4',
    templateUrl: './lesson4.component.html',
    styleUrls: ['./lesson4.component.css']
})
export class Lesson4Component implements OnInit{
    query: string = 'ex. (...) REPLACE(`column`, \'original\', \'replacement\');';

    constructor(private el: ElementRef) {
    }
    ngOnInit() {}
    sqlChange() {
        let myTag = document.querySelector(".aviato");
        if(this.query === 'UPDATE uhack.sponsors set `company` = REPLACE(`company`, \'Aviato\', \'Incubator\');') {
            if(!myTag.classList.contains('replace')) {
                myTag.classList.add('replace');
            }
        }
    }

}



