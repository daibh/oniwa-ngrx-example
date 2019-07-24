import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PersonService } from '../../shared/service/person.service';
import { Person } from 'src/app/shared/model/person.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateRangeValue: any;
  contextMenu: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.dateRangeValue = { fromDate: moment(), toDate: moment().add(5, 'days') };
    this.personService.fetchAll().subscribe(data => {
      this.contextMenu = data
    });
  }

  onChange($event, value) {
    console.log('onChange($event, value)', $event, value);
  }

}