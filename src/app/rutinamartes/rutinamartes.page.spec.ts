import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinamartesPage } from './rutinamartes.page';

describe('RutinamartesPage', () => {
  let component: RutinamartesPage;
  let fixture: ComponentFixture<RutinamartesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinamartesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
