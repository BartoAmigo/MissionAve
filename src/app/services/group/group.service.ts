import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private homeUrl='api/groups';

  constructor(private http:HttpClient) { 

  }

  
  getGroups(): Observable<Group[]> {
    console.log("TRYING TO GET GROUPS")
    console.log(this.http.get<Group[]>(this.homeUrl.toString()));
    return this.http.get<Group[]>(this.homeUrl);
  }
  
}
