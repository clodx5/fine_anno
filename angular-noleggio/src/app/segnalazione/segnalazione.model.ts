export class Segnalazione {
  idmono: string;
  problemi: string[];


  constructor(idmono: string, problemi: string[]) {
    this.idmono = idmono;
    this.problemi = problemi;
  }

}