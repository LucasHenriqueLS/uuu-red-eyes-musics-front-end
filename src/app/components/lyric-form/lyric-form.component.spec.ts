import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricFormComponent } from './lyric-form.component';

describe('LyricFormComponent', () => {
  let component: LyricFormComponent;
  let fixture: ComponentFixture<LyricFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LyricFormComponent]
    });
    fixture = TestBed.createComponent(LyricFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
