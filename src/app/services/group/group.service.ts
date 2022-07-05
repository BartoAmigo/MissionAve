import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { MOCKGROUPS } from 'src/app/mock-data/mock-groups';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private homeUrl="";

  constructor(private http:HttpClient) { 

  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.homeUrl);
  }
}
