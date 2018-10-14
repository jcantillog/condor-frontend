import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tm-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  professionsFilter = new FormControl();

  @Input()
  professions: string[] = [];

  selectedProfession = 'All';

  @Input()
  states: string[] = [];

  selectedState = 'VT';

  @Input()
  orderings: string[] = [];

  selectedOrdering = 'Popularity';

  constructor() {}

  ngOnInit() {}
}
