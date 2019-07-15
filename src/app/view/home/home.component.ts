import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateRangeValue: any;

  constructor() { }

  ngOnInit() {
    this.dateRangeValue = { fromDate: moment(), toDate: moment().add(5, 'days') };
  }

  onChange($event, value) {
    console.log('onChange($event, value)', $event, value);
  }

}