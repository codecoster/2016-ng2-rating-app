import {Component, Input, EventEmitter, Output} from '@angular/core';

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
  @Input() talk:Talk;
}
