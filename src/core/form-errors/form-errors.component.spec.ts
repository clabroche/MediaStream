import { TestBed, async } from '@angular/core/testing';

import { FormErrorsComponent } from './form-errors.component';
import { FormsModule } from '@angular/forms';

import {  CoreModule } from '../core.module'

describe('FormErrorsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormErrorsComponent,
      ],
      imports:[
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FormErrorsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
