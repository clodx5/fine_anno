export class Prenotazione {
  nome: string;
  cognome: string;
  indirizzo: string;
  telefono: string;
  email: string;
  dataP: string;
  oraP: string;

  constructor(nome: string, cognome: string, indirizzo: string, telefono: string, email: string, dataP: string, oraP: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
    this.email = email;
    this.dataP = dataP;
    this.oraP = oraP;
  }

}
