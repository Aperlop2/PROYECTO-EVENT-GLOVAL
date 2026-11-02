import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEventosComponent } from './historial-eventos.component';

describe('HistorialEventosComponent', () => {
  let component: HistorialEventosComponent;
  let fixture: ComponentFixture<HistorialEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
