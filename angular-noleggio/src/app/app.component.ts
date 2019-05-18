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
  title = 'AngularNoleggio';

  utenti: Registrazione[];
  data: Object;
  loading: boolean;
  oUt: Observable<Registrazione[]>;
  postUt: Observable<Object>;
  tempUt: Registrazione;

  // var per mostra-nascondi
  public isViewable1: boolean;
  public isViewable2: boolean;
  public isViewable3: boolean;
  public isViewable4: boolean;
  public isViewable5: boolean;

  constructor(public http: HttpClient) {
    //get
    this.utenti = new Array<Registrazione>();
    this.oUt = this.http.get<Registrazione[]>('link');
    this.oUt.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
    for(let element of data)
    {
       this.utenti.push(new Registrazione(element.nome, element.cognome, element.email, element.username, element.password, element.cartaCredito, element.sesso));
    }
  }

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

  // mostra-nascondi
  public toggle1(): void {
    this.isViewable1 = true;
    this.isViewable2 = false;
    this.isViewable3 = false;
    this.isViewable4 = false;
    this.isViewable5 = false;
  }
  public toggle2(): void {
    this.isViewable1 = false;
    this.isViewable2 = true;
    this.isViewable3 = false;
    this.isViewable4 = false;
    this.isViewable5 = false;
  }
  public toggle3(): void {
    this.isViewable1 = false;
    this.isViewable2 = false;
    this.isViewable3 = true;
    this.isViewable4 = false;
    this.isViewable5 = false;
  }
  public toggle4(): void {
    this.isViewable1 = false;
    this.isViewable2 = false;
    this.isViewable3 = false;
    this.isViewable4 = true;
    this.isViewable5 = false;
  }
  public toggle5(): void {
    this.isViewable1 = false;
    this.isViewable2 = false;
    this.isViewable3 = false;
    this.isViewable4 = false;
    this.isViewable5 = true;
  }


}
