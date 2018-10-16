import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Course } from '../../models';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'tm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;

  constructor() {
    this.course = {
      name: '',
      href: 'string',
      imageUrl: '',
      description: '',
      price: null,
      rating: null
    };
  }

  ngOnInit() {}

  getImage(imageUrl) {
    return `url("https://www.mytablemesa.com/${imageUrl}")`;
  }

  getCoursePrice() {
    return this.course.price === 0 ? 'FREE' : `$${this.course.price}`;
  }
}
