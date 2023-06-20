import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroEmpresa } from './cadastro-empresa';

@Injectable({
  providedIn: 'root'
})
export class CadastroEmpresaService {

  constructor(private http: HttpClient){}
  url = 'http://localhost:3000/cadastro-empresa';



  save(cadastroEmpresa : CadastroEmpresa):Observable<CadastroEmpresa>{

    return this.http.post<CadastroEmpresa>(this.url, cadastroEmpresa);
  }

}
