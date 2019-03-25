import { TestBed, inject } from '@angular/core/testing';

import { ListaPessoasService } from './lista-pessoas.service';

describe('ListaPessoasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaPessoasService]
    });
  });

  it('should be created', inject([ListaPessoasService], (service: ListaPessoasService) => {
    expect(service).toBeTruthy();
  }));
});
