  import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAssuntoComponent } from './lista-de-assunto.component';

describe('ListaDeDisciplinaComponent', () => {
  let component: ListaDeAssuntoComponent;
  let fixture: ComponentFixture<ListaDeAssuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeAssuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
