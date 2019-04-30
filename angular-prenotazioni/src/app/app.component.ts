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
  oPren: Observable<Prenotazione[]>;
  postPren: Observable<Object>;
  tempPren: Prenotazione;

   constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore prenotazioni
    this.prenotazioni = new Array<Prenotazione>();
    this.oPren = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oPren.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
    for(let element of data)
    {
       this.prenotazioni.push(new Prenotazione(element.nome, element.cognome, element.indirizzo, element.telefono, element.email, element.dataP, element.oraP));
    }
  }

  makeCompactRequest(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, dataP: HTMLInputElement, oraP: HTMLInputElement): boolean {
    this.tempPren = new Prenotazione(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, dataP.value, oraP.value);
    this.postPren = this.http.post('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni', JSON.stringify(this.tempPren));


    this.postPren.subscribe(data => {
      this.data = data;
      this.prenotazioni.push(this.tempPren);
    });

    return false;
  }


}
