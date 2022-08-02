import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StghubComponent } from './stghub.component';

describe('StghubComponent', () => {
  let component: StghubComponent;
  let fixture: ComponentFixture<StghubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StghubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StghubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
