import {Component, Input, EventEmitter, Output} from '@angular/core';

import {Talk} from "../shared/";

@Component({
    moduleId: module.id,
    selector: 'talk-rating',
    templateUrl: 'talk-rating.component.html',
    styleUrls: ['talk-rating.component.css']
})
export class TalkRatingComponent {
    @Input() talk: Talk;
}