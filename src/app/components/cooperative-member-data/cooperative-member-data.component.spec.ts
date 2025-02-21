import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeMemberDataComponent } from './cooperative-member-data.component';

describe('CooperativeMemberDataComponent', () => {
  let component: CooperativeMemberDataComponent;
  let fixture: ComponentFixture<CooperativeMemberDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CooperativeMemberDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativeMemberDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
