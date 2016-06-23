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

describe('Component: RatePicker', () => {
    it('should create an instance', () => {
        let component = new RatePickerComponent();
        expect(component).toBeTruthy();
    });
});
