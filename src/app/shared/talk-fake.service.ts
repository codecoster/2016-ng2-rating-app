import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TalkFakeService {
  public getTalks():Observable<Array<any>> {
    let talks:Array<any> =[
      {title:'TypeScript in a NutShell', speaker:'Max Mustermann'},
      {title:'Angular 2 in a SeaShell', speaker:'Hilde Hirsch'},
      {title:'Angular 2 vs React', speaker:'Marta Pfahl'}
    ];
    return Observable.from([talks]).publishLast().refCount();
  }
}
