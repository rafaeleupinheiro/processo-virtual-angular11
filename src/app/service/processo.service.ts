import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PREVIDENCIA_VIRTUAL} from './previdencia-api';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProcessoService {

  url: string = PREVIDENCIA_VIRTUAL;

  constructor(private http: HttpClient) {
  }

  pesquisar(cpf: string): Observable<any> {
    var body = {
      "cpf": cpf
    };
    return this.http.post(this.url + '/documento/pesquisar', body).pipe(map(documentos => {
      return documentos;
    }));
  }
}
