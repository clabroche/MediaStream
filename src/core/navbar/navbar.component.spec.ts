import { TestBed, async } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AuthModule } from '../../auth/auth.module'
import { GraphQLModule } from '../../graphQL/graphQL.module'
import { CoreModule } from '../../core/core.module'
import { CommonService } from '../providers/common.service'
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const HomeRoutes: Routes = [
  {
    path: "profile", component: jasmine.createSpyObj('lkjlkj', ['construct']), data: { state: 'profilePage' }, children: [
      { path: "infos", component: jasmine.createSpyObj('lkjlkj', ['construct']), data: { state: 'profilePage' }, outlet: "infos" },
      { path: "organisations", component: jasmine.createSpyObj('lkjlkj', ['construct']), data: { state: 'profilePage' }, outlet: "organisations" }
    ]
  },
];

describe('NavbarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AuthModule,
        GraphQLModule.forRoot(),
        CoreModule.forRoot(), // include NavbarComponent
        RouterTestingModule.withRoutes(HomeRoutes),
      ],
      providers:[
        CommonService
      ]
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
