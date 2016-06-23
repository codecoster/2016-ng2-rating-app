import {Component, provide, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {TalkService, TalkFakeService, Talk} from "./shared";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
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
