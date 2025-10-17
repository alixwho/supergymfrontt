import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinajuevesPage } from './rutinajueves.page';

describe('RutinajuevesPage', () => {
  let component: RutinajuevesPage;
  let fixture: ComponentFixture<RutinajuevesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinajuevesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
