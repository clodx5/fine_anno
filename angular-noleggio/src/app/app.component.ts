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

  public toggle1(): void { this.isViewable1 = !this.isViewable1; }
  public toggle2(): void { this.isViewable2 = !this.isViewable2; }
  public toggle3(): void { this.isViewable3 = !this.isViewable3; }
  public toggle4(): void { this.isViewable4 = !this.isViewable4; }
  public toggle5(): void { this.isViewable5 = !this.isViewable5; }


}
