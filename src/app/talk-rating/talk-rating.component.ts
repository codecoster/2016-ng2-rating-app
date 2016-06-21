import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Talk} from "../shared/talk.model";
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
  @Output() rated:EventEmitter<any> = new EventEmitter<any>();

  public currentRating:string;

  switchRating(newRating:string):void {
    this.currentRating = (this.currentRating == newRating ? '' : newRating);
    this.rated.emit([this.talk,this.currentRating]);
  }
}
