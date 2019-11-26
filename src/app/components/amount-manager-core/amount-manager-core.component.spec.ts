import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountManagerCoreComponent } from './amount-manager-core.component';

describe('AmountManagerCoreComponent', () => {
  let component: AmountManagerCoreComponent;
  let fixture: ComponentFixture<AmountManagerCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountManagerCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountManagerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
