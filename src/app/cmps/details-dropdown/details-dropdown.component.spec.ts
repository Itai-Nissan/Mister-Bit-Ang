import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDropdownComponent } from './details-dropdown.component';

describe('DetailsDropdownComponent', () => {
  let component: DetailsDropdownComponent;
  let fixture: ComponentFixture<DetailsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
