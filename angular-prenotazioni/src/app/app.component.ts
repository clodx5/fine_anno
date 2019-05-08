import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione/prenotazione.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prenotazioni';

  prenotazioni: Prenotazione[];
  data: Object;
  loading: boolean;
  oPren: Observable<Prenotazione[]>;
  postPren: Observable<Object>;
  tempPren: Prenotazione;
  selectedPren: Prenotazione;

   constructor(public http: HttpClient) {
    //get
    this.prenotazioni = new Array<Prenotazione>();
    this.oPren = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oPren.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
    for(let element of data)
    {
       this.prenotazioni.push(new Prenotazione(element.Nome, element.Cognome, element.Indirizzo, element.Telefono, element.Email, element.Data, element.Ora));
    }
  }

  makeCompactRequest(Nome: HTMLInputElement, Cognome: HTMLInputElement, Indirizzo: HTMLInputElement, Telefono: HTMLInputElement, Email: HTMLInputElement, Data: HTMLInputElement, Ora: HTMLInputElement): boolean {
    this.tempPren = new Prenotazione(Nome.value, Cognome.value, Indirizzo.value, Telefono.value, Email.value, Data.value, Ora.value);
    this.loading = true;
    this.postPren = this.http.post('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni', JSON.stringify(this.tempPren));
    this.prenotazioni.push(new Prenotazione(Nome.value, Cognome.value, Indirizzo.value, Telefono.value, Email.value, Data.value, Ora.value));

    this.postPren.subscribe(data => {
      this.data = data;
      this.loading = false;
      this.prenotazioni.push(this.tempPren);
    });

    return false;
  }

  //visualizzazione dettagli
  vedi(prenSel:Prenotazione) {
      this.selectedPren = prenSel;
  }


}
