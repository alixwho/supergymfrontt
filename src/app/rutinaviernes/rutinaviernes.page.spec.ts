import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaviernesPage } from './rutinaviernes.page';

describe('RutinaviernesPage', () => {
  let component: RutinaviernesPage;
  let fixture: ComponentFixture<RutinaviernesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaviernesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
