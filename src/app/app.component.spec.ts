/* tslint:disable:no-unused-variable */
import {provide} from '@angular/core';
import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {TalkFakeService} from './shared';

beforeEachProviders(() => [TalkFakeService, AppComponent]);

describe('App: RatingApp', () => {
    it('should create the app',
        inject([AppComponent], (app: AppComponent) => {
            expect(app).toBeTruthy();
        }));

    it('should have as title \'Rate the Talks!\'',
        inject([AppComponent], (app: AppComponent) => {
            expect(app.title).toEqual('Rate the Talks!');
        }));
});
