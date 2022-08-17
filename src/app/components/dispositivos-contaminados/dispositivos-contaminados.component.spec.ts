import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosContaminadosComponent } from './dispositivos-contaminados.component';

describe('DispositivosContaminadosComponent', () => {
  let component: DispositivosContaminadosComponent;
  let fixture: ComponentFixture<DispositivosContaminadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivosContaminadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivosContaminadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
