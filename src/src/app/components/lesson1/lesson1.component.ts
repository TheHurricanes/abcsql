import {Component,  OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-lesson1',
    templateUrl: './lesson1.component.html',
    styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
    query: string = 'SELECT * FROM database_name;';
    constructor(private el: ElementRef) {
    }

    ngOnInit(){}

    sqlChanges(events) {
        let myTag = this.el.nativeElement.querySelector("img");
        if(this.query === 'SELECT * FROM Uhack;') {
            if(!myTag.classList.contains('getBigger')) {
                myTag.classList.add('getBigger');
            }
        }
    }
}