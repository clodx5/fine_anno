import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
