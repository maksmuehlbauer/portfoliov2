import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWorkComponent } from './single-work.component';

describe('SingleWorkComponent', () => {
  let component: SingleWorkComponent;
  let fixture: ComponentFixture<SingleWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
