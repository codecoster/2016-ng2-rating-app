import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Talk} from './talk.model';

@Injectable()
export class TalkFakeService {
  private getTalks():Observable<Array<Talk>> {
    let talks:Array<Talk> =[
      {title:'TypeScript in a NutShell', speaker:'Max Mustermann'},
      {title:'Angular 2 in a SeaShell', speaker:'Hilde Hirsch'},
      {title:'Angular 2 vs React', speaker:'Marta Pfahl'}
    ];
    return Observable.from([talks]).publishLast().refCount();
  }
}
