import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRiskComponent } from './contextual-risk.component';

describe('ContextualRiskComponent', () => {
  let component: ContextualRiskComponent;
  let fixture: ComponentFixture<ContextualRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRiskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
