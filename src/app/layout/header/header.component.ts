import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  // remember to import EventEmitter on angular core...
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(link: string) {
    this.featureSelected.emit(link);
  }

}
