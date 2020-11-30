import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeneficiarioComponent} from './page/beneficiario/beneficiario.component';
import {ProcessoComponent} from './page/processo/processo.component';

const routes: Routes = [
  {path: '', redirectTo: '/beneficiario', pathMatch: 'full'},
  {path: 'beneficiario', component: BeneficiarioComponent},
  {path: 'processo', component: ProcessoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
