import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AzureComponent } from './azure-io-t.component';

describe('AzureComponent', () => {
  let component: AzureComponent;
  let fixture: ComponentFixture<AzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
