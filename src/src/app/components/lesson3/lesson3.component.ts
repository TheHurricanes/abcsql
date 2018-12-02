import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-lesson3',
    templateUrl: './lesson3.component.html',
    styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit{
    query: string = 'DELETE * FROM database_name.table_name;';

    constructor(private el: ElementRef) {
    }
    ngOnInit() {}
    sqlChange() {
        let myTag = document.querySelector(".students");
        if(this.query === 'DELETE * FROM uhack.students;') {
            if(!myTag.classList.contains('disappear')) {
                myTag.classList.add('disappear');
            }
        }
    }

}



