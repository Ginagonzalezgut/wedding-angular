import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInformationComponent } from './visitor-information.component';

describe('VisitorInformationComponent', () => {
  let component: VisitorInformationComponent;
  let fixture: ComponentFixture<VisitorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
