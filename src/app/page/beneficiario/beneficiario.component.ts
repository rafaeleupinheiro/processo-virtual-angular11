import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {
  enviado = false;
  email: FormControl;
  nome: FormControl;

  constructor() {
    this.nome = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    /*if (this.validacoes()) {
      this.salvaSolicitacao();
      this.animateScrollService.scrollToElement('sucesso', 300);
    }

    this.enviado = true;
    if (this.novoBeneficiario.invalid) {
      return;
    }*/
    console.log('SHOW');
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
