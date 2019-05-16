import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { RiconsegnaComponent } from './riconsegna/riconsegna.component';
import { SegnalazioneComponent } from './segnalazione/segnalazione.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    LoginComponent,
    NoleggioComponent,
    RiconsegnaComponent,
    SegnalazioneComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
