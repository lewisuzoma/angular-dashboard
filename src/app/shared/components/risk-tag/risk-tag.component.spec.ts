import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTagComponent } from './risk-tag.component';

describe('RiskTagComponent', () => {
  let component: RiskTagComponent;
  let fixture: ComponentFixture<RiskTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
