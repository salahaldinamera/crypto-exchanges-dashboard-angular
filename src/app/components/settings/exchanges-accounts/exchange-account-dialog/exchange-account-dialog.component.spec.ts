import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeAccountDialogComponent } from './exchange-account-dialog.component';

describe('ExchangeAccountDialogComponent', () => {
  let component: ExchangeAccountDialogComponent;
  let fixture: ComponentFixture<ExchangeAccountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeAccountDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
