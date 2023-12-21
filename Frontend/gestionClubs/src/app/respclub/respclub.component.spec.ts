import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespclubComponent } from './respclub.component';

describe('RespclubComponent', () => {
  let component: RespclubComponent;
  let fixture: ComponentFixture<RespclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
