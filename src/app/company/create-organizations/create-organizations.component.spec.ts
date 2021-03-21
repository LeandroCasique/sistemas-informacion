import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganizationsComponent } from './create-organizations.component';

describe('CreateOrganizationsComponent', () => {
  let component: CreateOrganizationsComponent;
  let fixture: ComponentFixture<CreateOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
