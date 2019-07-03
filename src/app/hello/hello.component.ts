import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class NgxHelloComponent implements OnInit {
  @Input() name: string;
  author = 'oNiwa (DaiBH)';
  constructor() { }

  ngOnInit() {
  }

}