import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIoT2Component } from './azure-io-t-2.component';

describe('AzureIoT2Component', () => {
  let component: AzureIoT2Component;
  let fixture: ComponentFixture<AzureIoT2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureIoT2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureIoT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
