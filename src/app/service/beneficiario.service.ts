import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PREVIDENCIA_VIRTUAL} from './previdencia-api';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BeneficiarioService {

  url: string = PREVIDENCIA_VIRTUAL;

  constructor(private http: HttpClient) {
  }

  pesquisar(): Observable<any> {
    return this.http.get(this.url + '/beneficiario/pesquisar')
      .pipe(map(beneficiarios => beneficiarios));
  }

  cadastrar(matricula: string, nome: string, cpf: string, orgao: string) {
    var body = {
      "matricula": matricula,
      "nome": nome,
      "cpf": cpf,
      "orgao": orgao
    };

    return this.http.post(this.url + '/beneficiario/cadastrar', body).pipe(map(user => {
      return user;
    }));
  }
}
