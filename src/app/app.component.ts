import {Component} from '@angular/core';

import {RatePickerComponent} from './rate-picker'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [RatePickerComponent]
})
export class AppComponent {
  title = 'app works!';

  toggleStates(currentState:string, nextState:string):string {
    return currentState == nextState ? '' : nextState;
  }
}
