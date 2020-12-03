import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeneficiarioCadastroComponent} from './page/beneficiario/beneficiario-cadastro/beneficiario-cadastro.component';
import {BeneficiarioListagemComponent} from './page/beneficiario/beneficiario-listagem/beneficiario-listagem.component';
import {ProcessoListagemComponent} from './page/processo/processo-listagem/processo-listagem.component';

const routes: Routes = [
  {path: '', redirectTo: '/beneficiario-listagem', pathMatch: 'full'},
  {path: 'beneficiario-listagem', component: BeneficiarioListagemComponent},
  {path: 'beneficiario-cadastro', component: BeneficiarioCadastroComponent},
  {path: 'processo-listagem', component: ProcessoListagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
