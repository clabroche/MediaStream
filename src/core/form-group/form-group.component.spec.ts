import { TestBed, async } from '@angular/core/testing';

import { FormGroupComponent } from './form-group.component';
import { NgModel } from '@angular/forms';

describe('FormGroupComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormGroupComponent
      ],
      imports:[
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('#isValid', () => {
    it('should create the app', async () => {
      const fixture = TestBed.createComponent(FormGroupComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.valid).toEqual(true)
      app.ngModels = [
        {valid:true}
      ]
      fixture.detectChanges()
      expect(app.valid).toEqual(true)

      app.ngModels = [
        { valid: true },
        { valid: false }
      ]
      fixture.detectChanges()
      await wait(50) // let angular perform checked error cycle
      expect(app.valid).toEqual(false)

      app.ngModels = [
        { valid: true },
        { valid: true }
      ]
      fixture.detectChanges()
      await wait(50) // let angular perform checked error cycle
      
      expect(app.valid).toEqual(true)
    })
  })
});

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  });
}