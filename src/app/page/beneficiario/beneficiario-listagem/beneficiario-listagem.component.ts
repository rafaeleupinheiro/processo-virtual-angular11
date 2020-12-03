import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BeneficiarioService} from '../../../service/beneficiario.service';
import {first} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {ShareService} from '../../../service/share.service';

@Component({
  selector: 'app-beneficiario-listagem',
  templateUrl: './beneficiario-listagem.component.html',
  styleUrls: ['./beneficiario-listagem.component.css'],
  providers: [BeneficiarioService, MessageService]
})
export class BeneficiarioListagemComponent implements OnInit {

  loading: boolean;
  listaBeneficiarios: [] = [];

  constructor(private router: Router, private beneficiarioService: BeneficiarioService,
              private messageService: MessageService, private share: ShareService) {
  }

  ngOnInit(): void {
    this.pesquisarBeneficiarios();
  }

  novoBeneficiario(): void {
    this.router.navigate(['./beneficiario-cadastro']);
  }

  pesquisarBeneficiarios(): void {
    this.loading = true;
    this.beneficiarioService.pesquisar().pipe(first()).subscribe(beneficiarios => {
        this.loading = false;
        return this.listaBeneficiarios = beneficiarios;
      },
      error => {
        this.loading = false;
        if (error === 'Unknown Error' || error === 'ERR_CONNECTION_REFUSED') {
          this.messageService.add(
            {
              severity: 'error',
              summary: 'Ops... Erro no servidor. Tente novamente em alguns instantes!',
              life: 9999999
            }
          );
        } else {
          this.messageService.add({severity: 'warn', summary: 'Erro ao listar beneficiários!', life: 6000});
        }
      }
    );
  }

  selecionaBeneficiario(beneficiario): void {
    this.share.param = beneficiario.cpf;
    this.router.navigate(['/processo-listagem/']);
  }
}
