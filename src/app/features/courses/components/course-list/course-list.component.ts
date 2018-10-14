import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tm-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input()
  courses;

  constructor() {}

  ngOnInit() {}
}
