import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitAppComponent } from './bit-app.component';

describe('BitAppComponent', () => {
  let component: BitAppComponent;
  let fixture: ComponentFixture<BitAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
