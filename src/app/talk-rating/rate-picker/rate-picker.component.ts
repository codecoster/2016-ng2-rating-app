import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rate-picker',
  templateUrl: 'rate-picker.component.html',
  styleUrls: ['rate-picker.component.css']
})
export class RatePickerComponent {
    
  private ratings = ['top', 'ok', 'meh'];
}
