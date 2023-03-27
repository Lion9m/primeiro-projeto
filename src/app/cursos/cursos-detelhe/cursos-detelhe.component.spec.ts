import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetelheComponent } from './cursos-detelhe.component';

describe('CursosDetelheComponent', () => {
  let component: CursosDetelheComponent;
  let fixture: ComponentFixture<CursosDetelheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDetelheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosDetelheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
