import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureIoT4Component } from './azure-io-t-4.component';

describe('AzureIoT4Component', () => {
  let component: AzureIoT4Component;
  let fixture: ComponentFixture<AzureIoT4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureIoT4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureIoT4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
