import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarcursoPage } from './registrarcurso.page';

describe('RegistrarcursoPage', () => {
  let component: RegistrarcursoPage;
  let fixture: ComponentFixture<RegistrarcursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
