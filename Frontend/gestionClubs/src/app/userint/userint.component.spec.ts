import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserintComponent } from './userint.component';

describe('UserintComponent', () => {
  let component: UserintComponent;
  let fixture: ComponentFixture<UserintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
