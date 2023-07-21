import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLyricComponent } from './send-lyric.component';

describe('SendLyricComponent', () => {
  let component: SendLyricComponent;
  let fixture: ComponentFixture<SendLyricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendLyricComponent]
    });
    fixture = TestBed.createComponent(SendLyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
