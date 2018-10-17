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
  stars: number[];

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

  ngOnInit() {
    // Filling stars
      this.stars = Array(5)
          .fill(0)
          .map((value, index) => {
            const starPosition = index + 1;
            return this.course.rating > starPosition
                ? 1
                : (starPosition - this.course.rating) % 1;
          });
  }

  getImage(imageUrl) {
    return `url("https://www.mytablemesa.com/${imageUrl}")`;
  }

  getCoursePrice() {
    return this.course.price === 0 ? 'FREE' : `$${this.course.price}`;
  }

  getStarColor(percentFill) {
    const grayColor = '#d1e1ef';
    const yellowColor = '#f6c943';
    return percentFill === 0 ? grayColor : yellowColor;
  }

  getStarIcon(percentFill) {
    return percentFill > 0 && percentFill < 1 ? 'star_half' : 'star';
  }
}
