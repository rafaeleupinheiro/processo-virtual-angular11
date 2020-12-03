import {Component, OnInit} from '@angular/core';
import {ProcessoService} from '../../../service/processo.service';
import {first} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {ShareService} from '../../../service/share.service';

@Component({
  selector: 'app-processo-listagem',
  templateUrl: './processo-listagem.component.html',
  styleUrls: ['./processo-listagem.component.css'],
  providers: [ProcessoService, MessageService]
})
export class ProcessoListagemComponent implements OnInit {

  cpf: string;
  nenhumDocumento: boolean;
  documentos: any;
  listaidentificacao: [] = [];
  listaRemuneracaoProventos: [] = [];
  listaContagemTempo: [] = [];
  listaVidaFuncional: [] = [];

  constructor(private router: Router, private processoService: ProcessoService,
              private messageService: MessageService, private share: ShareService) {
    this.cpf = this.share.param;
  }

  ngOnInit(): void {
    this.nenhumDocumento = false;
    this.cpf = this.share.param;
    this.pesquisarDocumentos();
  }

  pesquisarDocumentos(): void {
    this.processoService.pesquisar(this.cpf).pipe(first()).subscribe(documentos => {
        this.documentos = documentos;
        if (this.documentos.identificacao !== undefined) {
          this.listaidentificacao = this.documentos.identificacao;
        }
        if (this.documentos.remuneracao_proventos !== undefined) {
          this.listaRemuneracaoProventos = this.documentos.remuneracao_proventos;
        }
        if (this.documentos.contagem_de_tempo !== undefined) {
          this.listaContagemTempo = this.documentos.contagem_de_tempo;
        }
        if (this.documentos.vida_funcional !== undefined) {
          this.listaVidaFuncional = this.documentos.vida_funcional;
        }
        return this.documentos;
        if (this.documentos.length === 0) {
          this.nenhumDocumento = true;
        }
      },
      error => {
        if (error === 'Unknown Error' || error === 'ERR_CONNECTION_REFUSED') {
          this.messageService.add(
            {
              severity: 'error',
              summary: 'Ops... Erro no servidor. Tente novamente em alguns instantes!',
              life: 9999999
            }
          );
        } else {
          if (this.documentos.length === 0) {
            this.nenhumDocumento = true;
          }
          this.messageService.add({severity: 'warn', summary: 'Erro ao listar documentos!', life: 6000});
        }
      }
    );
  }

  voltar(): void {
    this.router.navigate(['./beneficiario-listagem']);
  }
}
