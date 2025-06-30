import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMomentComponent } from './story-moment.component';

describe('StoryMomentComponent', () => {
  let component: StoryMomentComponent;
  let fixture: ComponentFixture<StoryMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryMomentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
