import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit{
    query: string = 'SELECT * FROM database_name.table_name;';

    constructor(private el: ElementRef) {
    }
    ngOnInit() {}
    sqlChange() {
        let myTag = document.querySelector(".sponsor");
        if(this.query === 'SELECT * FROM uhack.sponsors;') {
            if(!myTag.classList.contains('getBigger')) {
                myTag.classList.add('getBigger');
            }
        }
    }
}



