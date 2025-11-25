import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminodediaPage } from './terminodedia.page';

describe('TerminodediaPage', () => {
  let component: TerminodediaPage;
  let fixture: ComponentFixture<TerminodediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminodediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
