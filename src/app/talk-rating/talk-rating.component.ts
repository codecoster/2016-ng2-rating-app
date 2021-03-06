import {Component, Input} from '@angular/core';

import {Talk} from "../shared/";
import {RatePickerComponent} from "./rate-picker/rate-picker.component";

@Component({
    moduleId: module.id,
    selector: 'talk-rating',
    templateUrl: 'talk-rating.component.html',
    styleUrls: ['talk-rating.component.css'],
    directives: [RatePickerComponent]
})
export class TalkRatingComponent {
    @Input() talk: Talk;

    private changeRating(rating: string): void {
        if (rating) {
            console.log(`Rate the Talk '${this.talk.title}' by '${this.talk.speaker}' with '${rating}'`);
        }
    }
}