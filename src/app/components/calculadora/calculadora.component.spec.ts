import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';


describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar se 2 valores são iguais', () => {
    const valor1 = { value: true };
    const valor2 = { value: true };

    expect(valor1).toBe(valor1);
    expect(valor1).toEqual(valor2);
  });

  it('deve somar 2 numeros corretamente', () => {
    component.num1 = 2;
    component.num2 = 6;
    component.somarValores();

    expect(component.result).toBe(8);
  });

  it('deve validar se a variavel num1 foi indefinida', () => {
    expect(component.num1).toBeUndefined();
  });

  it('deve validar se a variavel num2 foi definida', () => {
    expect(component.num2).toBeDefined();
  });

});
