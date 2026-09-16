import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoDoblesComponent } from './hijo-dobles-component';

describe('HijoDoblesComponent', () => {
  let component: HijoDoblesComponent;
  let fixture: ComponentFixture<HijoDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
