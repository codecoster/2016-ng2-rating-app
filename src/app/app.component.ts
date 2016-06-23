import {Component, provide, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {TalkRatingComponent} from "./talk-rating/talk-rating.component";
import {TalkService, TalkFakeService, Talk} from "./shared";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TalkRatingComponent],
  providers: [provide(TalkService, {useClass: TalkFakeService})]
})
export class AppComponent implements OnInit{
    
  title:string = 'Rate the Talks!';
  private talks: Observable<Array<Talk>>;

  constructor(private talkService:TalkService){
  }

  ngOnInit():any{
    this.talks = this.talkService.getTalks();
  }
}
