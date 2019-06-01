import { Injectable } from '@angular/core';

export class Evento {

}

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  mock: [
      {
        'eventCode': '1aa3kjhnjhsafj8yi99', 
        'eventName': 'Python', 
        'oficineCode': 1, 
        'oficineName': 'Python', 
        'oficineLocal': '',
        'instructorName': '',
        'startDateTime': '',
        'endDateTime': '',
        'beforeInterval': '',
        'afterInterval': '',
      },
      {
        'eventCode': 'jkhsdnfasuh78747435', 
        'eventName': 'Redes', 
        'oficineCode': 2, 
        'oficineName': 'Redes', 
        'instructorName': '',
        'startDateTime': '',
        'endDateTime': '',
        'beforeInterval': '',
        'afterInterval': '',
      },
      {
        'eventCode': 'kljashf878583475kkh', 
        'eventName':, 'AWS', 
        'oficineCode': 3, 'AWS', 
        'oficineName': 'AWS', 
        'instructorName': '',
        'startDateTime': '',
        'endDateTime': '',
        'beforeInterval': '',
        'afterInterval': '',
      }
    ]
  constructor() { }
}
