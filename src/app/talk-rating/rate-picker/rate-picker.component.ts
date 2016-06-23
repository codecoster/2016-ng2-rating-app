import {Output, EventEmitter, Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rate-picker',
  templateUrl: 'rate-picker.component.html',
  styleUrls: ['rate-picker.component.css']
})
export class RatePickerComponent {
    
  @Output() rated:EventEmitter<any> = new EventEmitter<any>();

  private ratings = ['top', 'ok', 'meh'];

  switchRating(newRating:string):void {
    this.rated.emit(newRating);
  }
}
