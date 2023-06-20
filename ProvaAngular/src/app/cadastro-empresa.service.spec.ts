import { TestBed } from '@angular/core/testing';

import { CadastroEmpresaService } from './cadastro-empresa.service';

describe('CadastroEmpresaService', () => {
  let service: CadastroEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
