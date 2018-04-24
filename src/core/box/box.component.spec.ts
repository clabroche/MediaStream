import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';

import { BoxComponent } from './box.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BoxComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoxComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(BoxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
})