import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforcusComponent } from './inforcus.component';

describe('InforcusComponent', () => {
  let component: InforcusComponent;
  let fixture: ComponentFixture<InforcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforcusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
