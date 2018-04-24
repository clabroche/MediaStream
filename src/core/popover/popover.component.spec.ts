import { TestBed, async } from '@angular/core/testing';
import { BootstrapModule } from '../bootstrap/bootstrap.module'
import { PopoverComponent } from './popover.component';


describe('PopoverComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BootstrapModule
      ],
      declarations: [
        PopoverComponent
      ] 
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PopoverComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
