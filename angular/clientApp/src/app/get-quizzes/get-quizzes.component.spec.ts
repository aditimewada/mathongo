import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuizzesComponent } from './get-quizzes.component';

describe('GetQuizzesComponent', () => {
  let component: GetQuizzesComponent;
  let fixture: ComponentFixture<GetQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
