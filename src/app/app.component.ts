import {Component, provide, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {TalkFakeService} from "./shared";


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [TalkFakeService]
})
export class AppComponent implements OnInit {

    title: string = 'Rate the Talks!';
    private talks: Observable<Array<any>>;

    constructor(private talkService: TalkFakeService) {
    }

    ngOnInit(): any {
        this.talks = this.talkService.getTalks();
    }
}
