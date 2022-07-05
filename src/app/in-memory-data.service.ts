import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groups = [
      { groupId: 1, groupName: "Punks", groupEvents:[
        {eventId:1, eventTitle: "Punk Party", eventDes: "Just a Punk Party", eventImg: "assets/PunkEvent.jpg"},
        {eventId:2, eventTitle: "Punk Fiesta", eventDes: "bitches invited", eventImg:""}],
    },
    { groupId: 2, groupName: "Goths", groupEvents:[
        { eventId: 1, eventTitle: "Goth Party", eventDes: "Just a party.", eventImg:"assets/GothEvent.jpeg"},
        {eventId:2, eventTitle: "Goth Fiesta", eventDes:"Goth bitches only", eventImg:""}],
    }
    ];
    return {groups}
  }
  constructor() { }
}
