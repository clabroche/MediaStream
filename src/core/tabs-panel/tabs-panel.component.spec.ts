import { TestBed, async } from '@angular/core/testing';

import { TabsPanelComponent } from './tabs-panel.component';


describe('TabsPanelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabsPanelComponent
      ] 
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TabsPanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
