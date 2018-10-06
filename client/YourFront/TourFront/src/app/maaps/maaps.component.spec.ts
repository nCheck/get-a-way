import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaapsComponent } from './maaps.component';

describe('MaapsComponent', () => {
  let component: MaapsComponent;
  let fixture: ComponentFixture<MaapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
