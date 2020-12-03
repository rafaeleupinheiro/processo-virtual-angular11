import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Message, MessageService} from 'primeng/api';
import {BeneficiarioService} from '../../../service/beneficiario.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-beneficiario-cadastro',
  templateUrl: './beneficiario-cadastro.component.html',
  styleUrls: ['./beneficiario-cadastro.component.css'],
  providers: [BeneficiarioService, MessageService]
})
export class BeneficiarioCadastroComponent implements OnInit {
  msgs: Message[] = [];
  matricula: FormControl;
  nome: FormControl;
  cpf: FormControl;
  orgao: FormControl;

  constructor(private router: Router, private beneficiarioService: BeneficiarioService,
              private messageService: MessageService) {
    this.matricula = new FormControl('', [Validators.required]);
    this.nome = new FormControl('', [Validators.required]);
    this.cpf = new FormControl('', [Validators.required, Validators.maxLength(11)]);
    this.orgao = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  cadastrar(): void {
    if (this.matricula.value.length < 1) {
      this.messageService.add({severity: 'warn', summary: 'Favor preencher a matrícula!'});
    }else if (this.nome.value.length < 1) {
      this.messageService.add({severity: 'warn', summary: 'Favor preencher o nome!'});
    } else if (this.cpf.value.length !== 11) {
      this.messageService.add({severity: 'warn', summary: 'CPF inválido!'});
    } else if (this.orgao.value.length < 1) {
      this.messageService.add({severity: 'warn', summary: 'Favor preencher o orgão!'});
    } else {
      this.beneficiarioService.cadastrar(this.matricula.value, this.nome.value, this.cpf.value, this.orgao.value).pipe(first()).subscribe((beneficiario) => {
          if (beneficiario != null) {
            this.router.navigate(['./beneficiario-listagem']);
          } else {
            debugger;
            this.messageService.add({severity: 'warn', summary: 'Campo(s) inválido(s)'});
          }
        },
        error => {
          if (error == "Unknown Error") {
            this.messageService.add({
              severity: 'error',
              summary: 'Estamos com problemas... Tente novamente em alguns instantes.'
            });
          } else {
            debugger;
            this.messageService.add({severity: 'warn', summary: 'Campo(s) inválido(s)'});
          }
        });
    }
  }

  cancelar(): void {
    this.router.navigate(['./beneficiario-listagem']);
  }

  getErrorMessageNome(): string {
    if (this.nome.hasError('required')) {
      return 'Digite o nome';
    }
    return this.nome.hasError('nome') ? 'Campo nome inválido' : '';
  }

  getErrorMessageCpf(): string {
    if (this.cpf.hasError('required')) {
      return 'Digite o cpf';
    }
    return this.cpf.hasError('cpf') ? 'Campo cpf inválido' : '';
  }

  getErrorMessageOrgao(): string {
    if (this.orgao.hasError('required')) {
      return 'Digite o orgão';
    }
    return this.orgao.hasError('orgao') ? 'Campo orgão inválido' : '';
  }

  getErrorMessageMatricula(): string {
    if (this.orgao.hasError('required')) {
      return 'Digite a matrícula';
    }
    return this.orgao.hasError('matricula') ? 'Campo orgão inválido' : '';
  }
}
