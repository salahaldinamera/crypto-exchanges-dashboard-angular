import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesApisComponent } from './exchanges-apis.component';

describe('ExchangesApisComponent', () => {
  let component: ExchangesApisComponent;
  let fixture: ComponentFixture<ExchangesApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangesApisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangesApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
