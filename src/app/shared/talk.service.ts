import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Talk} from './talk.model';

@Injectable()
export class TalkService {
  constructor(private http:Http) {
  }

  public getTalks():Observable<Array<Talk>> {
    return this.http.get('talks/')
      .map((response:Response)=> <Array<Talk>>response.json());
  }
}
