import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallejerPage } from './detallejer.page';

describe('DetallejerPage', () => {
  let component: DetallejerPage;
  let fixture: ComponentFixture<DetallejerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallejerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
