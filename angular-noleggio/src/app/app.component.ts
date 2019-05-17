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


}
