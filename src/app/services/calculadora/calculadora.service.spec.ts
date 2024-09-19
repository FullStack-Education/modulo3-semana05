import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve lançar um erro ao tentar dividir um valor por zero usando o toThrow', () => {
    expect( () => service.dividir(10,0)).toThrow();
  });

  it('deve lançar um erro ao tentar dividir um valor por zero usando o toThrowError', () => {
    expect( () => service.dividir(10,0)).toThrowError('Não é permitida a divisão por zero');
  });

  it('deve retornar true para "Ana"', () => {
    expect(service.validarNome("Ana")).toBe(true);
  });

  it('deve retornar false para "A"', () => {
    expect(service.validarNome("A")).toBeFalsy();
  });

  it('deve retornar false para strings e numeros', () => {
    expect(service.validarNome("Ana567")).toBeFalsy();
  });

  it('deve retornar false para caracateres especiais', () => {
    expect(service.validarNome("!!!@kkk")).toBeFalsy();
  });

  it('deve retornar false para strings vazias', () => {
    expect(service.validarNome("")).toBeFalsy();
  });

  it('deve retornar false para strings e numeros', () => {
    expect(service.validarNome("J0ao")).not.toBeTruthy();
  });

  it('deve retornar false para strings com caracteres especiais', () => {
    expect(service.validarNome("João")).not.toBeTruthy();
  });

});
