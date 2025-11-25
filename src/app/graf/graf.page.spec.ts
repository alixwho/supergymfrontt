import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrafPage } from './graf.page';

describe('GrafPage', () => {
  let component: GrafPage;
  let fixture: ComponentFixture<GrafPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
