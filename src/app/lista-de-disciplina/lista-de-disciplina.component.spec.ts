import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeDisciplinaComponent } from './lista-de-disciplina.component';

describe('ListaDeDisciplinaComponent', () => {
  let component: ListaDeDisciplinaComponent;
  let fixture: ComponentFixture<ListaDeDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
