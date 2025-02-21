import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeMemberComponent } from './cooperative-member.component';

describe('CooperativeMemberComponent', () => {
  let component: CooperativeMemberComponent;
  let fixture: ComponentFixture<CooperativeMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperativeMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
