import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackIndividualComponent } from './hack-individual.component';

describe('HackIndividualComponent', () => {
  let component: HackIndividualComponent;
  let fixture: ComponentFixture<HackIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
