import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFormComponent } from './joke-form.component';

describe('JokeFormComponent', () => {
  let component: JokeFormComponent;
  let fixture: ComponentFixture<JokeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
