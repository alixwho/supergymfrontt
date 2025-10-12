import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaejerPage } from './listaejer.page';

describe('ListaejerPage', () => {
  let component: ListaejerPage;
  let fixture: ComponentFixture<ListaejerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaejerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
