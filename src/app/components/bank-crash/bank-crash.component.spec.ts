import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCrashComponent } from './bank-crash.component';

describe('BankCrashComponent', () => {
  let component: BankCrashComponent;
  let fixture: ComponentFixture<BankCrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCrashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
