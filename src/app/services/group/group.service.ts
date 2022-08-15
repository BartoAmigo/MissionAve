import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private homeUrl='api/groups';

  constructor(private http:HttpClient) { }

  getGroups() : Observable<Group[]> {
    console.log("GroupService.getGroups() fire ATTEMTPING GET REQUEST.");
    return this.http.get<Group[]>(this.homeUrl); 
  }
}
