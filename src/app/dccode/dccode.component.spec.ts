import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccodeComponent } from './dccode.component';

describe('DccodeComponent', () => {
  let component: DccodeComponent;
  let fixture: ComponentFixture<DccodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
