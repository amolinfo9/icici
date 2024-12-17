import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmansComponent } from './workmans.component';

describe('WorkmansComponent', () => {
  let component: WorkmansComponent;
  let fixture: ComponentFixture<WorkmansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkmansComponent]
    });
    fixture = TestBed.createComponent(WorkmansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
