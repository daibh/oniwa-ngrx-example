import { Component, OnInit, Input } from '@angular/core';
import { BehaviorService, TalkContent } from '../behavior.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [BehaviorService]
})
export class ParentComponent implements OnInit {

  @Input() hasChild: boolean = false;
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
    this.behaviorService.doSay({ obj: 'parent', message: this.content });
    this.content = '';
  }

}
