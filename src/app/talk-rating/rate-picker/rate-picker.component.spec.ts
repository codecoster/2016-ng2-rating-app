/* tslint:disable:no-unused-variable */
import {By}           from '@angular/platform-browser';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
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

    it('should show the proper symbol', async(inject([TestComponentBuilder], (builder: TestComponentBuilder) => {
        builder.createAsync(TestComponent)
            .then((fixture: ComponentFixture<TestComponent>) => {
                fixture.detectChanges();

                let nativeElement = fixture.debugElement.children[0].nativeElement;
                nativeElement.getElementsByClassName('top')[0].click();
                fixture.detectChanges();
                let mehElement = nativeElement.getElementsByClassName('meh')[0];
                expect(mehElement.className).toEqual('meh hidden');
            });
    })));
});
