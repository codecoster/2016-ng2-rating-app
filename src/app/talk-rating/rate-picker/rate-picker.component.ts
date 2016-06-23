import {Output, EventEmitter, Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rate-picker',
  templateUrl: 'rate-picker.component.html',
  styleUrls: ['rate-picker.component.css']
})
export class RatePickerComponent {
    
  @Output() rated:EventEmitter<any> = new EventEmitter<any>();

  currentRating:string;
  private ratings = ['top', 'ok', 'meh'];

  switchRating(newRating:string):void {
    this.currentRating = (this.currentRating == newRating ? '' : newRating);
    this.rated.emit(this.currentRating);
  }
  
  private checkHidden(rating:string): boolean{
      return this.currentRating && this.currentRating != rating;
  }
}
