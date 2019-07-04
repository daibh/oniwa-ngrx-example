import { Component, OnInit } from '@angular/core';
import { BehaviorService, TalkContent } from '../behavior.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [BehaviorService]
})
export class ChildComponent implements OnInit {
  content: string;
  talkContents: TalkContent[] = [];
  talkContentObs: TalkContent[] = [];

  constructor(
    private behaviorService: BehaviorService
  ) { }

  ngOnInit() {
    this.behaviorService.getObservable()
      .subscribe(talkContent => {
        if (talkContent) {
          this.talkContentObs.push(talkContent)
        }
      });
    this.behaviorService.getBehaviorSubject()
      .subscribe(talkContent => {
        if (talkContent) {
          this.talkContents.push(talkContent)
        }
      });
  }

  doSay = () => {
    this.behaviorService.doSay({ obj: 'child', message: this.content });
    this.content = '';
  }

}
