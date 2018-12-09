import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssuntoComponent} from './assunto.component';

describe('AssuntoComponent', () => {
  let component: AssuntoComponent;
  let fixture: ComponentFixture<AssuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
