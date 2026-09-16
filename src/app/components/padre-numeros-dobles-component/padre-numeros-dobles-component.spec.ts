import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreNumerosDoblesComponent } from './padre-numeros-dobles-component';

describe('PadreNumerosDoblesComponent', () => {
  let component: PadreNumerosDoblesComponent;
  let fixture: ComponentFixture<PadreNumerosDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreNumerosDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreNumerosDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
