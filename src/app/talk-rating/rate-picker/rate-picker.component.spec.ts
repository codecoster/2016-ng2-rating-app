/* tslint:disable:no-unused-variable */
import {By}           from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {
    beforeEach, beforeEachProviders,
    describe, xdescribe,
    expect, it, xit,
    async, inject
} from '@angular/core/testing';

import {RatePickerComponent} from './rate-picker.component';

@Component({
    selector: 'test-cmp',
    template: '<rate-picker></rate-picker>',
    directives: [RatePickerComponent]
})
class TestComponent { }

describe('Component: RatePicker', () => {

    beforeEachProviders(() => [RatePickerComponent]);

    it('should create an instance', () => {
        let component = new RatePickerComponent();
        expect(component).toBeTruthy();
    });

    it('should switch ratings', inject([RatePickerComponent], (ratePickerComponent: RatePickerComponent) => {
        ratePickerComponent.switchRating('top');
        expect(ratePickerComponent.currentRating).toEqual('top');
    }
    ));
});
