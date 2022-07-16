import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { MOCKGROUPS } from 'src/app/mock-data/mock-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroupList() : Group[] {

    return MOCKGROUPS;
  }
}
