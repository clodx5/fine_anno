import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Prenotazione } from './prenotazione.model';

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() prenotazione: Prenotazione;

  constructor() { }

  ngOnInit() { }


}
