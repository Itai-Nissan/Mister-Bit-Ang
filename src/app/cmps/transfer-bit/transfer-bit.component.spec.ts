import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBitComponent } from './transfer-bit.component';

describe('TransferBitComponent', () => {
  let component: TransferBitComponent;
  let fixture: ComponentFixture<TransferBitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
