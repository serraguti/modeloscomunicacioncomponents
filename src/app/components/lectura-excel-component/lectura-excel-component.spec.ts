import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturaExcelComponent } from './lectura-excel-component';

describe('LecturaExcelComponent', () => {
  let component: LecturaExcelComponent;
  let fixture: ComponentFixture<LecturaExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturaExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturaExcelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
