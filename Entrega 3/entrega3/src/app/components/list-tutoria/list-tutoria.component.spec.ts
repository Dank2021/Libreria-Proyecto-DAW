import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTutoriaComponent } from './list-tuoria.component';

describe('ListTutoriaComponent', () => {
  let component: ListTutoriaComponent;
  let fixture: ComponentFixture<ListTutoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTutoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
