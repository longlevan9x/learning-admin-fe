import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFormModalComponent } from './lesson-form-modal.component';

describe('LessonFormModalComponent', () => {
  let component: LessonFormModalComponent;
  let fixture: ComponentFixture<LessonFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonFormModalComponent]
    });
    fixture = TestBed.createComponent(LessonFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
