import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartPageComponent } from './restart-page.component';

describe('RestartPageComponent', () => {
  let component: RestartPageComponent;
  let fixture: ComponentFixture<RestartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
