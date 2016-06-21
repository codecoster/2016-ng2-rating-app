/* tslint:disable:no-unused-variable */
import {By}           from '@angular/platform-browser';
import {DebugElement, provide} from '@angular/core';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import {TalkRatingComponent} from './talk-rating.component';
import {TalkService, TalkFakeService} from '../shared';

describe('Component: TalkRating', () => {
  beforeEachProviders(()=>[provide(TalkService, {useClass:TalkFakeService} ),TalkRatingComponent]);

  it('should create an instance', () => {
    let component = new TalkRatingComponent();
    expect(component).toBeTruthy();
  });

  it('should switch ratings', inject([TalkRatingComponent], (talkRatingComponent:TalkRatingComponent)=> {
      talkRatingComponent.switchRating('top');
      expect(talkRatingComponent.currentRating).toEqual('top');
    }
  ))
});

