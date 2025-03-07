import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIoT3Component } from './azure-io-t-3.component';

describe('AzureIoT3Component', () => {
  let component: AzureIoT3Component;
  let fixture: ComponentFixture<AzureIoT3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureIoT3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureIoT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
