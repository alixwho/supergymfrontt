import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminarejerPage } from './terminarejer.page';

describe('TerminarejerPage', () => {
  let component: TerminarejerPage;
  let fixture: ComponentFixture<TerminarejerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarejerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
