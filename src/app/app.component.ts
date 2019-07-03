import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular Dynamic Loader';
  unsubscription: Subject<any> = new Subject<any>();

  ngOnInit() {

  }

  ngOnDestroy() {
    this.unsubscription.next();
    this.unsubscription.complete();
  }

}
