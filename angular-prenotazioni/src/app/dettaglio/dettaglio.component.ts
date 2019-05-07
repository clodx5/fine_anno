import { Component, OnInit, Input } from '@angular/core';
import { Prenotazione } from '../prenotazione/prenotazione.model';
import { PrenotazioneComponent } from '../prenotazione/prenotazione.component';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {
    @Input() dettaglio: Prenotazione;

    constructor() { }

    ngOnInit() {
    }

}
