import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MenuComponent} from './page/menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BeneficiarioCadastroComponent} from './page/beneficiario/beneficiario-cadastro/beneficiario-cadastro.component';
import {BeneficiarioListagemComponent} from './page/beneficiario/beneficiario-listagem/beneficiario-listagem.component';

// PRIMENG
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {HttpClientModule} from '@angular/common/http';
import {ProcessoListagemComponent} from './page/processo/processo-listagem/processo-listagem.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ShareService} from './service/share.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BeneficiarioCadastroComponent,
    BeneficiarioListagemComponent,
    ProcessoListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
