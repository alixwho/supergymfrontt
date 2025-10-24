import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgresoSemanalPage } from './progreso-semanal.page';

describe('ProgresoSemanalPage', () => {
  let component: ProgresoSemanalPage;
  let fixture: ComponentFixture<ProgresoSemanalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresoSemanalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
