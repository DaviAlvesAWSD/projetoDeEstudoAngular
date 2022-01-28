import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponentComponent } from './components/bem-vindo-component/bem-vindo-component.component';
import { FuncionarioCardComponentComponent } from './components/funcionario-card-component/funcionario-card-component.component';
import { FuncionarioFormComponentComponent } from './components/funcionario-form-component/funcionario-form-component.component';
import { CampoColoridoDirectiveDirective } from './directives/campo-colorido-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponentComponent,
    FuncionarioCardComponentComponent,
    FuncionarioFormComponentComponent,
    CampoColoridoDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
