import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroEmpresa } from '../cadastro-empresa';
import { CadastroEmpresaService } from '../cadastro-empresa.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent{
   cadastroEmpresas: CadastroEmpresa[] = [];

   formGroupEmpresas: FormGroup;

   constructor(private cadastroEmpresaService: CadastroEmpresaService, private formBuilder:FormBuilder){
     this.formGroupEmpresas = this.formBuilder.group({
       id: '',
       razaoSocial: '',
       numeroContato: '',
       delivery: false,
       cnpj: '',
       endereco:''
     });
   }

   save(){
    this.cadastroEmpresaService.save(this.formGroupEmpresas.value).subscribe(
      {
        //a resposta chega pelo next | client é data
        next : data => { //tratando o retorno do save |
          this.cadastroEmpresas.push(data); //atualiza o array
          this.formGroupEmpresas.reset();
        }
      }
     );
   }


}
