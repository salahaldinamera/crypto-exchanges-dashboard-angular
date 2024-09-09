import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesAccountsComponent } from './exchanges-accounts.component';

describe('ExchangesApisComponent', () => {
  let component: ExchangesAccountsComponent;
  let fixture: ComponentFixture<ExchangesAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangesAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangesAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
