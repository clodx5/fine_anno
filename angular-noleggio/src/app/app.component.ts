import { Component } from '@angular/core';
import { Registrazione } from './registrazione/registrazione.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-Rent';

  utenti: Registrazione[];
  data: Object;
  loading: boolean;
  oUt: Observable<Registrazione[]>;
  postUt: Observable<Object>;
  tempUt: Registrazione;

  makeCompactRequest(nome: HTMLInputElement, cognome: HTMLInputElement, email: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, cartaCredito: HTMLInputElement, sesso: HTMLInputElement): boolean {
    this.tempUt = new Registrazione(nome.value, cognome.value, email.value, username.value, password.value, cartaCredito.value, sesso.value);
    this.loading = true;
    this.postUt = this.http.post('link', JSON.stringify(this.tempUt));
    this.utenti.push(new Registrazione(nome.value, cognome.value, email.value, username.value, password.value, cartaCredito.value, sesso.value));

    this.postUt.subscribe(data => {
      this.data = data;
      this.loading = false;
      this.utenti.push(this.tempUt);
    });

    return false;
  }

}
