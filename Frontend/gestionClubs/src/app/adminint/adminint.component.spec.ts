import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminintComponent } from './adminint.component';

describe('AdminintComponent', () => {
  let component: AdminintComponent;
  let fixture: ComponentFixture<AdminintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
