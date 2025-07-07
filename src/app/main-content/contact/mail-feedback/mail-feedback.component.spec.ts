import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFeedbackComponent } from './mail-feedback.component';

describe('MailFeedbackComponent', () => {
  let component: MailFeedbackComponent;
  let fixture: ComponentFixture<MailFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
