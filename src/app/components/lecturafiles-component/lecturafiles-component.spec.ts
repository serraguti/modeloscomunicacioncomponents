import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturafilesComponent } from './lecturafiles-component';

describe('LecturafilesComponent', () => {
  let component: LecturafilesComponent;
  let fixture: ComponentFixture<LecturafilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LecturafilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LecturafilesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
