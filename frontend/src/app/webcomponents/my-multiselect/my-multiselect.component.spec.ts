import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMultiselectComponent } from './my-multiselect.component';

describe('MyMultiselectComponent', () => {
  let component: MyMultiselectComponent;
  let fixture: ComponentFixture<MyMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMultiselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
